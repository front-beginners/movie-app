import { fetchStudios } from '@/services/fetch-studios'
import { fetchWinnersByYear } from '@/services/fetch-winners-by-year'
import { fetchIntervalAward } from '@/services/fetch-interval-award'
import { useQueries } from '@tanstack/react-query'

export function useDashboardQuery() {
  const { winnerByYearData, studiosData, intervalAward } = useQueries({
    queries: [
      {
        queryKey: ['winnerByYear'],
        queryFn: fetchWinnersByYear,
      },
      {
        queryKey: ['studios'],
        queryFn: fetchStudios,
      },
      {
        queryKey: ['intervalAward'],
        queryFn: fetchIntervalAward,
      },
    ],
    combine: (results) => {
      return {
        winnerByYearData: results[0].data,
        studiosData: results[1].data,
        intervalAward: results[2].data,
        pending: results.some((result) => result.isPending),
      }
    },
  })

  return {
    winnerByYear: winnerByYearData?.years,
    studios: studiosData?.studios,
    intervalAward,
  }
}
