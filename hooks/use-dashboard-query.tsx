import { fetchStudios } from '@/services/fetch-studios'
import { fetchWinnersByYear } from '@/services/fetch-winners-by-year'
import { useQueries } from '@tanstack/react-query'

export function useDashboardQuery() {
  const { winnerByYearData, studiosData } = useQueries({
    queries: [
      {
        queryKey: ['winnerByYear'],
        queryFn: fetchWinnersByYear,
      },
      {
        queryKey: ['studios'],
        queryFn: fetchStudios,
      },
    ],
    combine: (results) => {
      return {
        winnerByYearData: results[0].data,
        studiosData: results[1].data,
        pending: results.some((result) => result.isPending),
      }
    },
  })

  return { winnerByYearData, studiosData }
}
