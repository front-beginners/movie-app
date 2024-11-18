import { fetchMultipleWinners } from '@/services/fetch-multiple-winners'
import { useQuery } from '@tanstack/react-query'

export function useMultipleWinnersQuery() {
  const { data } = useQuery({
    queryKey: ['multiple-winners'],
    queryFn: fetchMultipleWinners,
  })

  return { data }
}
