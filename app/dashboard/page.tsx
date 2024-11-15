'use client'

import BreadcrumbHeader from '@/components/breadcrumb-header'
import IntervalAwardsProducers from '@/components/interval-awards-producers'
import MoviesWinnersByYear from '@/components/movies-winners-by-year'
import TopStudios from '@/components/top-studios'

import { WinnersByYear } from '@/components/winners-by-year'
import { useDashboardQuery } from '@/hooks/use-dashboard-query'
import { topThreeWinners } from '@/lib/utils'
import React from 'react'

export default function Dashboard() {
  const { winnerByYear, studios, intervalAward } = useDashboardQuery()

  const topThree = topThreeWinners(studios)
  console.log(intervalAward)

  return (
    <>
      <BreadcrumbHeader pageTitle='Dashboard' />
      <div className='sm:grid sm:grid-cols-2 gap-4 flex flex-col'>
        <WinnersByYear winnersByYear={winnerByYear} />
        <TopStudios topThreeStudios={topThree} />
        <IntervalAwardsProducers intervalAward={intervalAward} />
        <MoviesWinnersByYear intervalAward={intervalAward} />
      </div>
    </>
  )
}
