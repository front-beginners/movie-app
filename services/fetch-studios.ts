import { StudioList } from '@/types'
import { axiosInstance } from './api'

export const fetchStudios = async () => {
  return await axiosInstance.get<StudioList>(
    '?projection=studios-with-win-count'
  )
}
