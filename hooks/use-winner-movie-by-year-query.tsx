import { fetchWinnerMovieByYear } from '@/services/fetch-winner-movie-by-year'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export function useWinnerMovieByYearQuery({ year }: { year: string }) {
  const { data, ...props } = useQuery({
    queryKey: ['winner-movie-by-year', year],
    queryFn: () => fetchWinnerMovieByYear(year),
    placeholderData: keepPreviousData,
    enabled: !!year,
  })

  const winnerMovieByYear = data?.data || []

  return { winnerMovieByYear, ...props }
}
