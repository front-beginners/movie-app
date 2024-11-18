import { renderHook, waitFor } from '@testing-library/react'
import { useMovieList } from './use-movie-list'
import { fetchMovieList } from '@/services/fetch-movie-list'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

jest.mock('@/services/fetch-movie-list')

const queryClient = new QueryClient()

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useMovieList', () => {
  it('should return data when fetch is successful', async () => {
    const mockData = { data: { number: 1, data: [] } }
    ;(fetchMovieList as jest.Mock).mockResolvedValue(mockData)

    const { result } = renderHook(() => useMovieList({ page: '1' }), {
      wrapper,
    })

    waitFor(() => {
      expect(result.current.data).toEqual(mockData.data)
      expect(result.current.pageIndex).toBe(mockData.data.number)
      expect(result.current.isLoading).toBe(false)
      expect(result.current.isError).toBe(false)
    })
  })

  it('should handle error state', async () => {
    ;(fetchMovieList as jest.Mock).mockRejectedValue(
      new Error('Failed to fetch')
    )

    const { result } = renderHook(() => useMovieList({ page: '1' }), {
      wrapper,
    })

    waitFor(() => {
      expect(result.current.data).toBeUndefined()
      expect(result.current.pageIndex).toBeUndefined()
      expect(result.current.isLoading).toBe(false)
      expect(result.current.isError).toBe(true)
    })
  })

  it('should use previous data while loading new data', async () => {
    const mockData = { data: { number: 1, data: [] } }
    ;(fetchMovieList as jest.Mock).mockResolvedValueOnce(mockData)

    const { result } = renderHook(() => useMovieList({ page: '1' }), {
      wrapper,
    })

    waitFor(() => {
      expect(result.current.data).toEqual(mockData.data)
      expect(result.current.pageIndex).toBe(mockData.data.number)
    })

    const newMockData = { data: { number: 2, data: [] } }
    ;(fetchMovieList as jest.Mock).mockResolvedValueOnce(newMockData)

    renderHook(() => useMovieList({ page: '2' }), { wrapper })

    expect(result.current.data).toEqual(mockData.data)
    expect(result.current.pageIndex).toBe(mockData.data.number)
  })
})
