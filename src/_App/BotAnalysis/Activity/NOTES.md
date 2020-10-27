

# Daily Bot Activity

```sql
SELECT
  extract(date from t.created_at) as date
  ,bu.community_id
  ,count(distinct t.status_id) as status_count
  ,count(distinct CASE WHEN t.retweet_status_id is not null THEN t.status_id END) as retweet_count
  ,count(distinct cast(t.user_id as int64)) as user_count
FROM impeachment_production.tweets t
JOIN impeachment_production.2_bot_communities bu ON bu.user_id = cast(t.user_id as int64)
GROUP BY 1,2
ORDER BY 1,2
```

De-normalized for the bar chart:

```sql
SELECT
  extract(date from t.created_at) as date
  ,count(distinct CASE WHEN bu.community_id = 0 THEN t.user_id END) as bot_count_0
  ,count(distinct CASE WHEN bu.community_id = 1 THEN t.user_id END) as bot_count_1
  ,count(distinct CASE WHEN bu.community_id = 0 THEN t.status_id END) as tweet_count_0
  ,count(distinct CASE WHEN bu.community_id = 1 THEN t.status_id END) as tweet_count_1
  ,count(distinct CASE WHEN bu.community_id = 0 AND t.retweet_status_id IS NOT NULL THEN t.status_id END) as retweet_count_0
  ,count(distinct CASE WHEN bu.community_id = 1 AND t.retweet_status_id IS NOT NULL THEN t.status_id END) as retweet_count_1
FROM impeachment_production.tweets t
JOIN impeachment_production.2_bot_communities bu ON bu.user_id = cast(t.user_id as int64)
GROUP BY 1
ORDER BY 1
```

Save results to local JSON file and paste here.
