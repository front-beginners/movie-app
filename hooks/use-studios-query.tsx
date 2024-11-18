import { fetchStudios } from '@/services/fetch-studios'
import { useQuery } from '@tanstack/react-query'

export function useStudiosQuery() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['studios'],
    queryFn: fetchStudios,
  })

  const studioList = data?.data

  return { studioList, isLoading, isError }
}
