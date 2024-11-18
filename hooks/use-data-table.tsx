import { useState } from 'react'
import { useMovieList } from '@/hooks/use-movie-list'
import useDebounce from '@/hooks/use-debounce'
import { useSyncSearchParams } from '@/hooks/use-sync-search-params'
import { useSearchParams } from 'next/navigation'

export function useDataTable() {
  const searchParams = useSearchParams()

  const page = searchParams.get('page') || '0'
  const year = searchParams.get('year') || ''
  const winnerQuery = searchParams.get('winner') || ''

  const [searchYear, setSearchYear] = useState(year || '')
  const [winner, setWinner] = useState(winnerQuery || '')

  const debouncedValue = useDebounce<string>(searchYear, 500)
  useSyncSearchParams({ debouncedValue, winner })

  const { data, isLoading, isError } = useMovieList({ page, year, winner })

  return {
    page,
    searchYear,
    setSearchYear,
    winner,
    setWinner,
    data,
    isLoading,
    isError,
    winnerQuery,
  }
}
