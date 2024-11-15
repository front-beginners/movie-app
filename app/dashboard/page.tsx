'use client'

import BreadcrumbHeader from '@/components/breadcrumb-header'
import useStudios from '@/hooks/use-studios'
import { topThreeWinners } from '@/lib/utils'

export default function Dashboard() {
  const { data } = useStudios()

  const topThree = topThreeWinners(data?.studios)
  console.log(topThree)

  return (
    <>
      <BreadcrumbHeader pageTitle='Dashboard' />
      <div className='flex flex-1  gap-4 p-4 pt-0'>
        {topThree?.map((studio) => {
          return (
            <div key={studio.name}>
              <div className=''>{studio.name}</div>
              <div className=''>{studio.winCount}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
