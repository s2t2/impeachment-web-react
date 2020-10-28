















## Daily Bot Probabilities Histogram

```sql

/*
SELECT
  bp -- 0.5697740
  ,round(bp) -- 1.0
  ,round(bp * 10) / 10 -- 0.6
  ,round(bp * 100) / 100 -- 0.57
FROM (SELECT 0.5697740969792087 as bp)

*/

SELECT
  round(bot_probability * 100) / 100 as bp_binned
  ,count(distinct user_id) as user_count
FROM impeachment_production.daily_bot_probabilities dbp
WHERE start_date = '2020-02-01' -- todo: data for all days / each day
GROUP BY 1
ORDER BY 1 DESC

```

So in BigQuery only the users with bot probabilities above 0.5 have been saved.

Need to dig into the google cloud storage bucket for the full CSV file.

See [API Prep](https://github.com/s2t2/tweet-analyzer-py/pull/65/files) and run the script to generate the JSON file. Then copy the JSON file into this dir.




## Bots Most Active

```sql
```
