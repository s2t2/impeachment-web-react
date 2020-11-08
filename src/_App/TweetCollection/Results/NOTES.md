

```sql

  SELECT

    count(distinct t.user_id) as user_count -- 3,117,397
    ,count(distinct t.status_id) as status_count -- 52,968,286

    ,count(distinct CASE WHEN  t.retweet_status_id IS NOT NULL THEN t.user_id END) as retweeter_count -- 2,402,868


    ,count(distinct CASE WHEN  t.retweet_status_id IS NOT NULL THEN t.status_id END) as retweet_count -- 43,882,352

  FROM impeachment_production.tweets t

  WHERE t.created_at BETWEEN '2019-12-20 00:00:00' AND '2020-02-15 23:59:59'

```
