'use client'

import BreadcrumbHeader from '@/components/breadcrumb-header'
import IntervalAwardsProducers from '@/components/interval-awards-producers'
import TopStudios from '@/components/top-studios'
import { WinnerMovieByYear } from '@/components/winner-movie-by-year'

import { WinnersByYear } from '@/components/winners-by-year'
import { useIntervalAward } from '@/hooks/use-interval-award-query'
import { useMultipleWinnersQuery } from '@/hooks/use-multiple-winners-query'

import React from 'react'

export default function Dashboard() {
  const { data } = useIntervalAward()
  const { data: multipleWinners } = useMultipleWinnersQuery()

  return (
    <>
      <BreadcrumbHeader pageTitle='Dashboard' />
      <div className='sm:grid sm:grid-cols-2 gap-4 flex flex-col'>
        <WinnersByYear winnersByYear={multipleWinners?.data.years} />
        <TopStudios />
        <IntervalAwardsProducers intervalAward={data?.data} />
        <WinnerMovieByYear />
      </div>
    </>
  )
}
