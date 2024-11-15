import { fetchStudios, StudioList } from '@/services/fetch-studios'
import { useQuery } from '@tanstack/react-query'

export default function useStudios() {
  const { data, isFetched } = useQuery<StudioList>({
    queryKey: ['studios'],
    queryFn: fetchStudios,
  })

  return { data, isFetched }
}
