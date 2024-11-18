import { fetchIntervalAward } from '@/services/fetch-interval-award'
import { useQuery } from '@tanstack/react-query'

export function useIntervalAward() {
  const { data } = useQuery({
    queryKey: ['interval-award'],
    queryFn: fetchIntervalAward,
  })

  return { data }
}
