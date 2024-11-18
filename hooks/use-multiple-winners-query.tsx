import { fetchMultipleWinners } from '@/services/fetch-multiple-winners'
import { useQuery } from '@tanstack/react-query'

export function useMultipleWinnersQuery() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['multiple-winners'],
    queryFn: fetchMultipleWinners,
  })

  const multipleWinners = data?.data.years || []

  return { multipleWinners, isLoading, isError }
}
