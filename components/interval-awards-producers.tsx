import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { IntervalAward } from '@/services/fetch-interval-award'

export default function IntervalAwardsProducers({
  intervalAward,
}: {
  intervalAward?: IntervalAward
}) {
  const min = intervalAward?.min
  const max = intervalAward?.max

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Producers with longest and shortest interval between wins
        </CardTitle>
      </CardHeader>
      <CardContent>
        {max?.map((winner) => {
          return (
            <div className='flex gap-4 justify-between' key={winner.producer}>
              <div className=''>{winner.producer}</div>
              <div className=''>{winner.interval}</div>
              <div className=''>{winner.previousWin}</div>
              <div className=''>{winner.followingWin}</div>
            </div>
          )
        })}
        {min?.map((winner) => {
          return (
            <div className='flex gap-4 justify-between' key={winner.producer}>
              <div className=''>{winner.producer}</div>
              <div className=''>{winner.interval}</div>
              <div className=''>{winner.previousWin}</div>
              <div className=''>{winner.followingWin}</div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
