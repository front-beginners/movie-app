export interface Studio {
  name: string
  winCount: number
}

export interface StudioList {
  studios: Studio[]
}

export const fetchStudios = async (): Promise<StudioList> => {
  const response = await fetch(
    'https://challenge.outsera.tech/api/movies?projection=studios-with-win-count'
  )
  if (!response.ok) {
    throw new Error('Erro ao buscar os dados')
  }
  return response.json()
}
