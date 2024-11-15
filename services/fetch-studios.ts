import { API } from './api'

export interface Studio {
  name: string
  winCount: number
}

export interface StudioList {
  studios: Studio[]
}

export const fetchStudios = async (): Promise<StudioList> => {
  const response = await fetch(
    API.BASE_URL + 'movies?projection=studios-with-win-count'
  )
  if (!response.ok) {
    throw new Error('Erro ao buscar os dados')
  }
  return response.json()
}
