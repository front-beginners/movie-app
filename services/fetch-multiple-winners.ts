import { YearsList } from '@/types'
import { axiosInstance } from './api'

export const fetchMultipleWinners = async () => {
  return await axiosInstance.get<YearsList>(
    '?projection=years-with-multiple-winners'
  )
}
