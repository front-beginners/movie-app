'use client'
import BreadcrumbHeader from '@/components/breadcrumb-header'
import { IntervalAwardsProducers } from '@/app/dashboard/interval-awards-producers'
import { TopStudios } from '@/app/dashboard/top-studios'
import { WinnerMovieByYear } from '@/app/dashboard/winner-movie-by-year'
import { MultipleWinnersByYear } from '@/app/dashboard/multiple-winners-by-year'

export default function Dashboard() {
  return (
    <>
      <BreadcrumbHeader pageTitle='Dashboard' />
      <div className='sm:grid sm:grid-cols-2 gap-4 flex flex-col'>
        <MultipleWinnersByYear />
        <TopStudios />
        <IntervalAwardsProducers />
        <WinnerMovieByYear />
      </div>
    </>
  )
}
