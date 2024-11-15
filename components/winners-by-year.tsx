import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Years } from '@/services/fetch-winners-by-year'

export function WinnersByYear({ winnersByYear }: { winnersByYear?: Years[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 3 Studios With Winners</CardTitle>
      </CardHeader>
      <CardContent>
        {winnersByYear?.map((winnerByYear) => {
          return (
            <React.Fragment key={winnerByYear.year}>
              <div className=''>{winnerByYear.year}</div>
              <div className=''>{winnerByYear.winnerCount}</div>
            </React.Fragment>
          )
        })}
      </CardContent>
    </Card>
  )
}
