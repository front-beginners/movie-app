import { useQuery } from '@tanstack/react-query'

interface Studio {
  studios: {
    name: string
    winCount: number
  }[]
}

const fetchStudios = async (): Promise<Studio> => {
  const response = await fetch(
    'https://challenge.outsera.tech/api/movies?projection=studios-with-win-count'
  )
  if (!response.ok) {
    throw new Error('Erro ao buscar os dados')
  }
  return response.json()
}

export default function useStudios() {
  const { data, isFetched } = useQuery<Studio>({
    queryKey: ['studios'],
    queryFn: fetchStudios,
  })

  return { data, isFetched }
}
