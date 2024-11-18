import { MovieList } from '@/types'
import { axiosInstance } from './api'

export const fetchMovieList = async ({
  page,
  year,
  winner,
}: {
  page: string
  year?: string
  winner?: string
}) => {
  const params: Record<string, string | undefined> = {
    page,
    size: '20',
    year,
    winner,
  }

  const filteredParams = Object.entries(params).reduce((acc, [key, value]) => {
    if (value) acc[key] = value
    return acc
  }, {} as Record<string, string>)

  return await axiosInstance.get<MovieList>('', { params: filteredParams })
}
