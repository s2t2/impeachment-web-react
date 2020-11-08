

# Daily Bot Activity

```sql

  SELECT
    extract(date from t.created_at) as date

    ,count(distinct CASE WHEN u.is_bot = true and u.avg_score_bert < 0.5 THEN t.user_id END) as bots_0
    ,count(distinct CASE WHEN u.is_bot = true and u.avg_score_bert > 0.5 THEN t.user_id END) as bots_1
    ,count(distinct CASE WHEN u.is_bot = true and u.avg_score_bert < 0.5 AND t.retweet_status_id IS NULL THEN t.status_id END) as bot_tweets_0
    ,count(distinct CASE WHEN u.is_bot = true and u.avg_score_bert > 0.5 AND t.retweet_status_id IS NULL THEN t.status_id END) as bot_tweets_1
    ,count(distinct CASE WHEN u.is_bot = true and u.avg_score_bert < 0.5 AND t.retweet_status_id IS NOT NULL THEN t.status_id END) as bot_retweets_0
    ,count(distinct CASE WHEN u.is_bot = true and u.avg_score_bert > 0.5 AND t.retweet_status_id IS NOT NULL THEN t.status_id END) as bot_retweets_1

    ,count(distinct CASE WHEN u.is_bot = false and u.avg_score_bert < 0.5 THEN t.user_id END) as humans_0
    ,count(distinct CASE WHEN u.is_bot = false and u.avg_score_bert > 0.5 THEN t.user_id END) as humans_1
    ,count(distinct CASE WHEN u.is_bot = false and u.avg_score_bert < 0.5 AND t.retweet_status_id IS NULL THEN t.status_id END) as human_tweets_0
    ,count(distinct CASE WHEN u.is_bot = false and u.avg_score_bert > 0.5 AND t.retweet_status_id IS NULL THEN t.status_id END) as human_tweets_1
    ,count(distinct CASE WHEN u.is_bot = false and u.avg_score_bert < 0.5 AND t.retweet_status_id IS NOT NULL THEN t.status_id END) as human_retweets_0
    ,count(distinct CASE WHEN u.is_bot = false and u.avg_score_bert > 0.5 AND t.retweet_status_id IS NOT NULL THEN t.status_id END) as human_retweets_1

  FROM impeachment_production.tweets t
  --JOIN impeachment_production.2_bot_communities bu ON bu.user_id = cast(t.user_id as int64)
  JOIN impeachment_production.user_details_v4 u ON u.user_id = cast(t.user_id as int64)
  WHERE t.created_at BETWEEN '2019-12-20 00:00:00' AND '2020-02-15 23:59:59'
    --and u.is_bot = true
    --and u.avg_score_bert is not null
  GROUP BY 1
  ORDER BY 1

```

Save results to local JSON file and paste here.
