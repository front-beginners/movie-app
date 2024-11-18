import { renderHook, waitFor } from '@testing-library/react'
import { useMultipleWinnersQuery } from './use-multiple-winners-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fetchMultipleWinners } from '@/services/fetch-multiple-winners'

jest.mock('@/services/fetch-multiple-winners')

const queryClient = new QueryClient()

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useMultipleWinnersQuery', () => {
  it('should return multiple winners data when fetch is successful', async () => {
    const mockData = { data: { years: [2020, 2021] } }
    ;(fetchMultipleWinners as jest.Mock).mockResolvedValueOnce(mockData)

    const { result } = renderHook(() => useMultipleWinnersQuery(), {
      wrapper,
    })

    waitFor(() => {
      expect(result.current.multipleWinners).toEqual([2020, 2021])
      expect(result.current.isLoading).toBe(false)
      expect(result.current.isError).toBe(false)
    })
  })

  it('should handle error state', async () => {
    ;(fetchMultipleWinners as jest.Mock).mockRejectedValueOnce(
      new Error('Failed to fetch')
    )

    const { result } = renderHook(() => useMultipleWinnersQuery(), {
      wrapper,
    })

    await waitFor(() => result.current.isLoading === false)

    waitFor(() => {
      expect(result.current.multipleWinners).toEqual([])
      expect(result.current.isLoading).toBe(false)
      expect(result.current.isError).toBe(true)
    })
  })

  it('should be loading initially', () => {
    const { result } = renderHook(() => useMultipleWinnersQuery(), { wrapper })

    waitFor(() => {
      expect(result.current.isLoading).toBe(true)
      expect(result.current.isError).toBe(false)
      expect(result.current.multipleWinners).toEqual([])
    })
  })
})
