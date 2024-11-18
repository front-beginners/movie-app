import { fetchIntervalAward } from '@/services/fetch-interval-award'
import { useQuery } from '@tanstack/react-query'

export function useIntervalAward() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['interval-award'],
    queryFn: fetchIntervalAward,
  })

  const intervalMax = data?.data.max || []
  const intervalMin = data?.data.min || []

  return { intervalMax, intervalMin, isLoading, isError }
}
