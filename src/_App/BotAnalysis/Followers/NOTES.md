
# Bot Follower Graphs

Get all the bots, and all users who follow them, (for each opinion community).

## Full Graph

Ids of all bots and active followers:

```sql
DROP TABLE IF EXISTS impeachment_production.bot_and_follower_ids;
CREATE TABLE IF NOT EXISTS impeachment_production.bot_and_follower_ids as (
  -- BOTS:
  SELECT DISTINCT user_id as node_id
  FROM impeachment_production.user_details_v6_slim u
  WHERE u.is_bot=True
  -- LIMIT 10

  UNION ALL

  -- BOT FOLLOWERS:
  SELECT DISTINCT auff.follower_id as node_id
  FROM impeachment_production.active_followers_flat_v2 auff
  JOIN impeachment_production.user_details_v6_slim u ON u.user_id = auff.user_id
  WHERE u.is_bot=True
  -- LIMIT 10
) -- 910,425
```


```sql

SELECT count(distinct u.user_id) as user_count -- 890,275
,count(distinct case when u.is_bot=True then u.user_id end) as bot_count -- 24,150

FROM impeachment_production.bot_and_follower_ids ids
JOIN impeachment_production.user_details_v6_slim u ON u.user_id = ids.node_id
--LIMIT 10
```

Bot and follower nodes:

```sql
SELECT DISTINCT
  user_id
  --,created_on
  ,screen_name_count
  ,screen_names
  ,is_bot
  --,is_q
  ,status_count
  --,rt_count
  --,opinion_community
  ,coalesce(avg_score_bert, avg_score_nb, avg_score_lr) as mean_opinion
  ,follower_count ,friend_count
FROM impeachment_production.bot_and_follower_ids nodes
JOIN impeachment_production.user_details_v6_slim u ON u.user_id = nodes.node_id
--ORDER BY screen_name_count DESC
--LIMIT 100
```

Save query results as JSON to Drive, and rename as "BotFollowerNodes.json".


Bot and follower links:

```sql
-- BOT FOLLOWERS:
SELECT DISTINCT auff.user_id ,auff.follower_id
FROM impeachment_production.active_followers_flat_v2 auff
JOIN impeachment_production.user_details_v6_slim u ON u.user_id = auff.user_id
WHERE u.is_bot=True
```

Save query results as JSON to Drive, and rename as "BotFollowerLinks.json". Rows: 29,843,033. Size: 2GB. Hmm that is very big. Will it fit within the Heroku slug size limit?

How about two smaller graphs?

## Graph 0


```sql
WITH nodes0 as (
  SELECT DISTINCT node_id
  FROM (
    -- BOTS:
    SELECT DISTINCT user_id as node_id
    FROM impeachment_production.user_details_v6_slim u
    WHERE u.is_bot=True and u.opinion_community=0

    UNION ALL

    -- BOT FOLLOWERS:
    SELECT DISTINCT auff.follower_id as node_id
    FROM impeachment_production.active_followers_flat_v2 auff
    JOIN impeachment_production.user_details_v6_slim u ON u.user_id = auff.user_id
    WHERE u.is_bot=True and u.opinion_community=0
  )
)

--SELECT count(distinct node_id) as node_count
--FROM nodes0 -- 504,883

SELECT DISTINCT
  user_id
  --,created_on
  ,screen_name_count
  ,screen_names
  ,is_bot
  --,is_q
  ,status_count
  --,rt_count
  --,opinion_community
  ,coalesce(avg_score_bert, avg_score_nb, avg_score_lr) as mean_opinion
  ,follower_count ,friend_count
FROM nodes0
JOIN impeachment_production.user_details_v6_slim u ON u.user_id = nodes0.node_id
```

Save query results as JSON to Drive, and rename as "Bot0FollowerNodes.json".

```sql
-- BOT FOLLOWERS:
SELECT DISTINCT auff.user_id ,auff.follower_id
FROM impeachment_production.active_followers_flat_v2 auff
JOIN impeachment_production.user_details_v6_slim u ON u.user_id = auff.user_id
WHERE u.is_bot=True and u.opinion_community = 0
```

Save query results as JSON to Drive, and rename as "Bot0FollowerLinks.json". Rows: 7,701,607. Size: 418 MB. Not terrible.

## Graph1

```sql
WITH nodes1 as (
  SELECT DISTINCT node_id
  FROM (
    -- BOTS:
    SELECT DISTINCT user_id as node_id
    FROM impeachment_production.user_details_v6_slim u
    WHERE u.is_bot=True and u.opinion_community=1

    UNION ALL

    -- BOT FOLLOWERS:
    SELECT DISTINCT auff.follower_id as node_id
    FROM impeachment_production.active_followers_flat_v2 auff
    JOIN impeachment_production.user_details_v6_slim u ON u.user_id = auff.user_id
    WHERE u.is_bot=True and u.opinion_community=1
  )
)


--SELECT count(distinct node_id) as node_count
--FROM nodes1 -- 439,554


SELECT DISTINCT
  user_id
  --,created_on
  ,screen_name_count
  ,screen_names
  ,is_bot
  --,is_q
  ,status_count
  --,rt_count
  --,opinion_community
  ,coalesce(avg_score_bert, avg_score_nb, avg_score_lr) as mean_opinion
  ,follower_count ,friend_count
FROM nodes1
JOIN impeachment_production.user_details_v6_slim u ON u.user_id = nodes1.node_id

```

Save query results as JSON to Drive, and rename as "Bot1FollowerNodes.json". 76 MB.

```sql
-- BOT FOLLOWERS:
SELECT DISTINCT auff.user_id ,auff.follower_id
FROM impeachment_production.active_followers_flat_v2 auff
JOIN impeachment_production.user_details_v6_slim u ON u.user_id = auff.user_id
WHERE u.is_bot=True and u.opinion_community = 1
```

Save query results as JSON to Drive, and rename as "Bot1FollowerLinks.json". Rows: 22,141,426. Size: 1 GB. Maybe doable.

...


OK so it turns out BigQuery exports bad JSON. Not helpful. So let's write a custom python script instead... Or maybe we can export CSV and use another tool / service to convert CSV to JSON...
