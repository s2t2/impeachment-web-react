


```sql
SELECT community_id, count(distinct user_id) as user_count, count(distinct status_id) as status_count
FROM impeachment_production.2_community_labeled_tweets
GROUP BY 1
```


```sql
SELECT count(distinct status_text) as text_count
FROM impeachment_production.2_community_labeled_status_texts
```
