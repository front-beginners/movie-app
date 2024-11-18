import { YearsList } from '@/types'
import { axiosInstance } from './api'

export const fetchWinnerMovieByYear = async (year: string) => {
  return await axiosInstance.get<YearsList>(`?winner=true&year=${year}`)
}
