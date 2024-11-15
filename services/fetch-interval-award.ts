import { API } from './api'

export interface IntervalAwardMinMax {
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}

export interface IntervalAward {
  max: IntervalAwardMinMax[]
  min: IntervalAwardMinMax[]
}

export const fetchIntervalAward = async (): Promise<IntervalAward> => {
  const response = await fetch(
    API.BASE_URL + 'movies?projection=max-min-win-interval-for-producers'
  )
  if (!response.ok) {
    throw new Error('Erro ao buscar os dados')
  }
  return response.json()
}
