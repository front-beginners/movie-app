import { renderHook, waitFor } from '@testing-library/react'
import { useQuery } from '@tanstack/react-query'
import { useWinnerMovieByYearQuery } from './use-winner-movie-by-year-query'

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
  keepPreviousData: jest.fn(),
}))

jest.mock('@/services/fetch-winner-movie-by-year', () => ({
  fetchWinnerMovieByYear: jest.fn(),
}))

describe('useWinnerMovieByYearQuery', () => {
  it('should return winner movie data when query is successful', async () => {
    const mockData = { data: [{ id: 1, title: 'Movie 1' }] }
    ;(useQuery as jest.Mock).mockReturnValue({ data: mockData })

    const { result } = renderHook(() =>
      useWinnerMovieByYearQuery({ year: '2021' })
    )

    waitFor(() => {
      expect(result.current.winnerMovieByYear).toEqual(mockData.data)
    })
  })

  it('should return an empty array when there is no data', async () => {
    ;(useQuery as jest.Mock).mockReturnValue({ data: null })

    const { result } = renderHook(() =>
      useWinnerMovieByYearQuery({ year: '2021' })
    )

    waitFor(() => {
      expect(result.current.winnerMovieByYear).toEqual([])
    })
  })

  it('should call fetchWinnerMovieByYear with the correct year', async () => {
    const mockData = { data: [{ id: 1, title: 'Movie 1' }] }
    ;(useQuery as jest.Mock).mockReturnValue({ data: mockData })

    renderHook(() => useWinnerMovieByYearQuery({ year: '2021' }))

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ['winner-movie-by-year', '2021'],
      queryFn: expect.any(Function),
      placeholderData: expect.any(Function),
      enabled: true,
    })
  })

  it('should not call fetchWinnerMovieByYear if year is not provided', async () => {
    renderHook(() => useWinnerMovieByYearQuery({ year: '' }))

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ['winner-movie-by-year', ''],
      queryFn: expect.any(Function),
      placeholderData: expect.any(Function),
      enabled: false,
    })
  })
})
