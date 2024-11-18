import { renderHook } from '@testing-library/react'
import { useQuery } from '@tanstack/react-query'
import { useStudiosQuery } from './use-studios-query'

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}))

jest.mock('@/services/fetch-studios', () => ({
  fetchStudios: jest.fn(),
}))

describe('useStudiosQuery', () => {
  it('should return studioList when data is available', () => {
    const mockData = { data: [{ id: 1, name: 'Studio Ghibli' }] }
    ;(useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    })

    const { result } = renderHook(() => useStudiosQuery())

    expect(result.current.studioList).toEqual(mockData.data)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  it('should return isLoading as true when loading', () => {
    ;(useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    })

    const { result } = renderHook(() => useStudiosQuery())

    expect(result.current.studioList).toBeUndefined()
    expect(result.current.isLoading).toBe(true)
    expect(result.current.isError).toBe(false)
  })

  it('should return isError as true when there is an error', () => {
    ;(useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    })

    const { result } = renderHook(() => useStudiosQuery())

    expect(result.current.studioList).toBeUndefined()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(true)
  })
})
