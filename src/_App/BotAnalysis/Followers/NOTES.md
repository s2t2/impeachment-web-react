
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
