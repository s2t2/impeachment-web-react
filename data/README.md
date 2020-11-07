
# Data

## Bot Opinion Communities

Statuses Most Retweeted:

```sql
SELECT
  rt.status_text
  ,count(distinct rt.user_id) as bot_count -- retweeter_count
  --,count(distinct rt.status_id) as retweet_count

FROM impeachment_production.retweets_v2 rt
JOIN impeachment_production.user_details_v4 bu ON bu.user_id = rt.user_id
WHERE is_bot = true
  and avg_score_bert < 0.5 -- 10,114
  --and avg_score_bert > 0.5 -- 13,929
GROUP BY 1
ORDER BY 2 DESC
LIMIT 25
```

Users Most Retweeted:

```sql
SELECT
  rt.retweeted_user_id
  ,rt.retweeted_user_screen_name
  ,count(distinct rt.user_id) as retweeter_count
  ,count(distinct rt.status_id) as retweet_count

FROM impeachment_production.retweets_v2 rt
JOIN impeachment_production.user_details_v4 bu ON bu.user_id = rt.user_id
WHERE is_bot = true
  and avg_score_bert < 0.5 -- 10,114
  --and avg_score_bert > 0.5 -- 13,929
GROUP BY 1,2
ORDER BY 4 DESC
LIMIT 1000
```

Top Profile Tags:

```sql
SELECT
  pt.tag
  ,count(distinct pt.user_id) as bot_count
FROM impeachment_production.user_details_v4 bu
JOIN impeachment_production.profile_tags_v2_flat pt ON bu.user_id = pt.user_id
WHERE is_bot = true
  and avg_score_bert < 0.5 -- 10,114
  --and avg_score_bert > 0.5 -- 13,929
GROUP BY 1
ORDER BY 2 DESC
LIMIT 1000
```


Top Status Tags:

```sql
SELECT
  st.tag
  ,count(distinct st.user_id) as bot_count
  ,count(distinct st.status_id) as status_count

FROM impeachment_production.user_details_v4 bu
JOIN impeachment_production.status_tags_v2_flat st ON bu.user_id = st.user_id
WHERE is_bot = true
  and avg_score_bert < 0.5 -- 10,114
  --and avg_score_bert > 0.5 -- 13,929
GROUP BY 1
ORDER BY 3 DESC
LIMIT 1000
```
