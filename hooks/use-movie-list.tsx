import { fetchMovieList } from '@/services/fetch-movie-list'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export function useMovieList({
  page,
  year,
  winner,
}: {
  page: string
  year?: string
  winner?: string
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['movie-list', page, year, winner],
    queryFn: () => fetchMovieList({ page, year, winner }),
    placeholderData: keepPreviousData,
  })

  return {
    data: data?.data,
    pageIndex: data?.data.number,
    isLoading,
    isError,
  }
}
