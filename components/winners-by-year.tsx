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
            <div className='flex gap-4 justify-between' key={winnerByYear.year}>
              <div className=''>{winnerByYear.year}</div>
              <div className=''>{winnerByYear.winnerCount}</div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
