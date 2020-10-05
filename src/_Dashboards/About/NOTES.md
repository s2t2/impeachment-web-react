# Notes

## About Page Queries

### Tweet Collection

```sql
select topic, extract(date from created_at) as date_added
from impeachment_production.topics
order by 2,1
```

```sql
select
  min(extract(date from created_at)) as collection_start
  ,max(extract(date from created_at)) as collection_end
  ,count(distinct status_id) as status_count
  ,count(distinct user_id) as user_count

  ,count(distinct CASE WHEN retweet_status_id is not null then status_id end) as rt_count
  ,count(distinct CASE WHEN retweet_status_id is not null then user_id end) as rt_user_count
from impeachment_production.tweets

```
