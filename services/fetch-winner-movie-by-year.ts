import { WinnerMovieByYear } from '@/types'
import { axiosInstance } from './api'

export const fetchWinnerMovieByYear = async (year: string) => {
  return await axiosInstance.get<WinnerMovieByYear[]>(
    `?winner=true&year=${year}`
  )
}
