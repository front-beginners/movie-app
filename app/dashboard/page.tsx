'use client'

import BreadcrumbHeader from '@/components/breadcrumb-header'
import IntervalAwardsProducers from '@/components/interval-awards-producers'
import TopStudios from '@/components/top-studios'
import { WinnerMovieByYear } from '@/components/winner-movie-by-year'

import { WinnersByYear } from '@/components/winners-by-year'
import { useIntervalAward } from '@/hooks/use-interval-award-query'
import { useMultipleWinnersQuery } from '@/hooks/use-multiple-winners-query'
import { useStudiosQuery } from '@/hooks/use-studios-query'
import { useWinnerMovieByYear } from '@/hooks/use-winner-movie-by-year-query'
import { topThreeWinners } from '@/lib/utils'
import React from 'react'

export default function Dashboard() {
  const { data } = useIntervalAward()
  const { data: multipleWinners } = useMultipleWinnersQuery()
  const { data: movieWinnerByYear } = useWinnerMovieByYear({ year: '2000' })
  const { data: studios } = useStudiosQuery()

  const topThree = topThreeWinners(studios?.data.studios)

  return (
    <>
      <BreadcrumbHeader pageTitle='Dashboard' />
      <div className='sm:grid sm:grid-cols-2 gap-4 flex flex-col'>
        <WinnersByYear winnersByYear={multipleWinners?.data.years} />
        <TopStudios topThreeStudios={topThree} />
        <IntervalAwardsProducers intervalAward={data?.data} />
        <WinnerMovieByYear winnerByMovie={movieWinnerByYear?.data} />
      </div>
    </>
  )
}
