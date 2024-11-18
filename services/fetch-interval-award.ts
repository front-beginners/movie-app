import { IntervalAward } from '@/types'
import { axiosInstance } from './api'

export const fetchIntervalAward = async () => {
  return await axiosInstance.get<IntervalAward>(
    '?projection=max-min-win-interval-for-producers'
  )
}
