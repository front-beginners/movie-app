'use client'

import BreadcrumbHeader from '@/components/breadcrumb-header'
import TopStudios from '@/components/top-studios'
import { Card, CardContent } from '@/components/ui/card'
import { WinnersByYear } from '@/components/winners-by-year'
import { useDashboardQuery } from '@/hooks/use-dashboard-query'
import { topThreeWinners } from '@/lib/utils'
import React from 'react'

export default function Dashboard() {
  const { winnerByYearData, studiosData } = useDashboardQuery()

  const topThree = topThreeWinners(studiosData?.studios)
  console.log(winnerByYearData)

  return (
    <>
      <BreadcrumbHeader pageTitle='Dashboard' />
      <div className='sm:grid sm:grid-cols-2 gap-4 flex flex-col'>
        <TopStudios topThreeStudios={topThree} />
        <WinnersByYear winnersByYear={winnerByYearData?.years} />
      </div>
    </>
  )
}
