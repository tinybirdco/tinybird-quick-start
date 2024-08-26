
import { Table, BarList, DonutChart } from '@tinybirdco/charts';

const token = process.env.NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN ?? '';
const baseUrl = process.env.NEXT_PUBLIC_TINYBIRD_API_BASE_URL ?? '';

export function Orders(params: {
  limit?: number
  name?: string
}) {
  return (
    <Table
      endpoint={`${baseUrl}/v0/pipes/order_history.json`}
      token={token}
      categories={['date', 'order', 'total', 'used_rewards', 'online_order']}
      height="1000px"
      padding="10px"
      borderRadius="6px"
      params={params}
    />
  )
};

export function Leaderboard(params: {
    name?: string
  }) {
    return (
      <BarList
        endpoint={`${baseUrl}/v0/pipes/order_type.json`}
        token={token}
        index="order"
        categories={['count']}
        colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
        height="400px"
        padding="10px"
        borderRadius="6px"
        params={params}
      />
    )
  };

  export function CustomerDetails(params: {
    name?: string
  }) {
    return (
      <Table
        endpoint={`${baseUrl}/v0/pipes/customer.json`}
        token={token}
        categories={['name', 'member_since', 'total_rewards', 'rewards_value']}
        borderRadius="6px"
        height="125px"
        padding="10px"
        params={params}
      />
    )
  }

  export function SpendUntilNextReward(params: {
    name?: string
  }) {
    return (
      <DonutChart
        endpoint={`${baseUrl}/v0/pipes/rewards.json`}
        token={token}
        index="type"
        categories={['value']}
        colorPalette={['#27F795', '#717380']}
        title="Spend Until Next Reward"
        showLegend={true}
        height="300px"
        borderRadius="6px"
        params={params}
      />
    )
  }
