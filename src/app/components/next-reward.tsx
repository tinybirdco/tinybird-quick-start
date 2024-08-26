'use client'

import { DonutChart } from '@tinybirdco/charts'

export function NextReward(params: {
  name?: string
}) {
  return (
    <DonutChart
      endpoint="https://api.us-west-2.aws.tinybird.co/v0/pipes/rewards.json"
      token = "p.eyJ1IjogIjA1ZGUzNGFjLWYzNGEtNDMzYi1hM2U2LThlM2Y5ZjQzM2MyYiIsICJpZCI6ICI0MGJlOGU2OC0zYzdkLTQyM2UtOWRkMC1mOWViYzU3YTZmNTYiLCAiaG9zdCI6ICJhd3MtdXMtd2VzdC0yIn0.EkXYrsYsQsRLAswFUaUxR4mTNPDD6Izyr7vIpTvaZHs"
      index="type"
      categories={['value']}
      colorPalette={['#27F795', '#717380', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      borderRadius="6px"
      title="Next Reward"
      showLegend={true}
      height="300px"
      params={params}
    />
  )
}