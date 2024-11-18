import { fetchStudios } from '@/services/fetch-studios'
import { useQuery } from '@tanstack/react-query'

export function useStudiosQuery() {
  const { data } = useQuery({
    queryKey: ['studios'],
    queryFn: fetchStudios,
  })

  return { data }
}
