

Top 10 most active bots:

```sql
SELECT
  --bu.bot_id
  bu.bot_screen_name as screen_name
  ,count(distinct t.status_id) as status_count
  ,count(distinct case when t.retweet_status_id is not null then t.status_id END) rt_count
  ,count(distinct case when t.retweet_status_id is not null then t.status_id END) / count(distinct t.status_id) as rt_pct
FROM impeachment_production.bots_above_80 bu
JOIN impeachment_production.tweets t on cast(t.user_id as int64) = bu.bot_id
GROUP BY 1 --, 2
ORDER BY rt_count DESC
LIMIT 25
```
