import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Studio } from '@/services/fetch-studios'

export default function TopStudios({
  topThreeStudios,
}: {
  topThreeStudios?: Studio[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 3 Studios With Winners</CardTitle>
      </CardHeader>
      <CardContent>
        {topThreeStudios?.map((studio) => {
          return (
            <div className='flex gap-4 justify-between' key={studio.name}>
              <div className=''>{studio.name}</div>
              <div className=''>{studio.winCount}</div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
