# quick-start-demo
 
This repo contains the accompanying demo app to the Tinybird Quick Start video + guide.

You will accomplish the following:
1. Sign up for Tinybird
2. Ingest data
3. Query data
4. Publish as an API
5. Call the API
6. Update Tinybird workspace via CLI

## Run the app locally

### Prerequisites
- Node.js >= 18.18
- Python: 3.8, 3.9, 3.10, or 3.11
- A [free Tinybird account](https://tinybird.co/signup)

### Install dependencies

Open repo in VS Code or editor of choice.

Then install app dependencies from the root of the repo:

```bash
npm i
```

## Tinybird setup
Create a [free Tinybird account](https://tinybird.co/signup)

Select region

Create workspace called *customer_rewards*

### Data Source

Upload orders.ndjson (found in quick-start-demo/data)

Append data source using Events API

From the terminal run one of the following:

Copy cURL command from Events API modal and change -d line to
```bash
      -d $'{"cost":8.01,"date":"2024-08-09 10:32:20.164","first_name":"Cameron","online_order":1,"order":"pastry","store":"145 N Washington Boulevard","transaction_id":"7dc1f433-ccbd-4791-b8df-701643b0bbae","used_rewards":1}'
```
OR

Update the following with your Tinybird API base url and admin token

```bash
curl \
      -X POST '<TINYBIRD API BASE URL>/v0/events?name=orders' \
      -H "Authorization: Bearer <TINYBIRD ADMIN TOKEN>" \
      -d $'{"cost":8.01,"date":"2024-08-09 10:32:20.164","first_name":"Cameron","online_order":1,"order":"pastry","store":"145 N Washington Boulevard","transaction_id":"7dc1f433-ccbd-4791-b8df-701643b0bbae","used_rewards":1}'
``` 

### Pipe

In Tinybird UI, select Create Pipe. 

Rename Pipe to *rewards* and first node to *spend_and_progress*

Copy the following into *spend_and_progress* node
```sql
%
SELECT
    first_name AS name,
    round(sum(cost), 2) AS total_spend,
    round(total_spend - floor(total_spend, -2), 2) AS current_progress,
    100 - current_progress AS remaining_spend
FROM orders
WHERE used_rewards = 0 AND name = {{ String(name, 'April') }}
GROUP BY name

```

Copy the following into the transformation node, run, and then rename to *endpoint*

```sql
SELECT name, 'current_progress' AS type, current_progress AS value
FROM spend_and_progress
UNION ALL
SELECT name, 'remaining' AS type, remaining_spend AS value
FROM spend_and_progress
ORDER BY type
```

### API Endpoint and Chart

Select Create API Endpoint and select endpoint

(to test, copy HTTP request into new browser tab)

Select Create Chart

General tab:
- Name: Next Reward
- Type: Donut Chart

Data tab
- Index: type
- Category: value
- Legend: Show legend in chart checked

Style tab
- Chart colors: update 2nd color to #717380
- Height: 300px
- Border Radius: 6px

Save chart

### Update app

Install Tinybird charts from the root of the repo by running

```bash
npm install @tinybirdco/charts
```

Copy Next Reward component into components/next-reward.tsx and save

Go to dashboard/page.tsx and Import NextReward component and add it into the Page() component then save

### Run the demo app

Run it locally:

```bash
npm run dev
```

Then open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) with your browser.

## Bonus: use CLI to see additional charts in action

## Push additional Pipes using Tinybird CLI

Reference; [CLI overview](https://www.tinybird.co/docs/cli/overview)

From top-level, move to tinybird folder

```bash
cd tinybird
```

Create a virtual environment for Python 3

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Authenticate with your admin token

```bash
tb auth -i
```

Push the Pipes

```bash
tb push
```

### Add your Tinybird parameters to environment variables

Return to repo's top-level with a new terminal or 
```bash
cd ..
```

Create a new file `.env.local`
```bash
cp .env.example .env.local
```

You need to copy your Tinybird host and token to the `.env.local` file in your directory:

Make sure to use the correct [API base URL](https://www.tinybird.co/docs/api-reference/overview#regions-and-endpoints) for your selected region 


```bash
NEXT_PUBLIC_TINYBIRD_API_BASE_URL="YOUR API BASE URL (ex: https://api.tinybird.co)"
NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN="chart_read_token (available in UI from Tokens after pushing pipes)"
```

### Check out the demo app

Open [http://localhost:3000](http://localhost:3000) with your browser to see all of the charts!

(Note: you may need to restart your local server)

```bash
npm run dev
```

## Congrats!
What will you build next?
