import { fetchWinnerMovieByYear } from '@/services/fetch-winner-movie-by-year'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export function useWinnerMovieByYear({ year }: { year: string }) {
  const { data } = useQuery({
    queryKey: ['winner-movie-by-year', year],
    queryFn: () => fetchWinnerMovieByYear(year),
    placeholderData: keepPreviousData,
  })

  return { data }
}