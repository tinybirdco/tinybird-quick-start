# update with your Tinybird API Base URL (ex: https://api.tinybird.co) and admin token

curl \
      -X POST '<TINYBIRD API BASE URL>/v0/events?name=orders' \
      -H "Authorization: Bearer <TINYBIRD ADMIN TOKEN>" \
      -d $'{"cost":8.01,"date":"2024-08-09 10:32:20.164","first_name":"Cameron","online_order":1,"order":"pastry","store":"145 N Washington Boulevard","transaction_id":"7dc1f433-ccbd-4791-b8df-701643b0bbae","used_rewards":1}'
