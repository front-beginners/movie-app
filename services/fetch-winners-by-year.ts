import { API } from './api'

export interface Years {
  year: number
  winnerCount: number
}

export interface YearsList {
  years: Years[]
}

export const fetchWinnersByYear = async (): Promise<YearsList> => {
  const response = await fetch(
    API.BASE_URL + 'movies?projection=years-with-multiple-winners'
  )
  if (!response.ok) {
    throw new Error('Erro ao buscar os dados')
  }
  return response.json()
}
