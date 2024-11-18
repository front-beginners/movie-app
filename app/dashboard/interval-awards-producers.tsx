'use client'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import { useIntervalAward } from '@/hooks/use-interval-award-query'
import { IntervalTableContent } from '../../components/interval-table-content'

export function IntervalAwardsProducers() {
  const { intervalMax, intervalMin, isLoading, isError } = useIntervalAward()

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Producers with longest and shortest interval between wins
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <IntervalTableContent
          title='Maximum'
          interval={intervalMax}
          isLoading={isLoading}
          isError={isError}
        />
        <IntervalTableContent
          title='Minimum'
          interval={intervalMin}
          isLoading={isLoading}
          isError={isError}
        />
      </CardContent>
    </Card>
  )
}
