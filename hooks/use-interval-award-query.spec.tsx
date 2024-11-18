import { renderHook } from '@testing-library/react'
import { useQuery } from '@tanstack/react-query'
import { useIntervalAward } from './use-interval-award-query'

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}))

jest.mock('@/services/fetch-interval-award')

describe('useIntervalAward', () => {
  it('should return intervalMax and intervalMin when data is available', () => {
    const mockData = {
      data: {
        max: [1, 2, 3],
        min: [4, 5, 6],
      },
    }
    ;(useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    })

    const { result } = renderHook(() => useIntervalAward())

    expect(result.current.intervalMax).toEqual([1, 2, 3])
    expect(result.current.intervalMin).toEqual([4, 5, 6])
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  it('should return empty arrays when data is not available', () => {
    ;(useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
    })

    const { result } = renderHook(() => useIntervalAward())

    expect(result.current.intervalMax).toEqual([])
    expect(result.current.intervalMin).toEqual([])
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  it('should return isLoading as true when loading', () => {
    ;(useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    })

    const { result } = renderHook(() => useIntervalAward())

    expect(result.current.isLoading).toBe(true)
    expect(result.current.isError).toBe(false)
  })

  it('should return isError as true when there is an error', () => {
    ;(useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    })

    const { result } = renderHook(() => useIntervalAward())

    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(true)
  })
})
