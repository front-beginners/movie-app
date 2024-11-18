import { renderHook, act } from '@testing-library/react'
import { useWinnerMovieByYear } from './use-winner-movie-by-year'
import { useWinnerMovieByYearQuery } from '@/hooks/use-winner-movie-by-year-query'

jest.mock('@/hooks/use-winner-movie-by-year-query')

describe('useWinnerMovieByYear', () => {
  it('should initialize with default values', () => {
    ;(useWinnerMovieByYearQuery as jest.Mock).mockReturnValue({
      winnerMovieByYear: [],
      isError: false,
      isLoading: false,
    })

    const { result } = renderHook(() => useWinnerMovieByYear())

    expect(result.current.winnerMovieByYear).toEqual([])
    expect(result.current.isButtonDisabled).toBe(true)
    expect(result.current.noResultFound).toBe(false)
    expect(result.current.isRequestError).toBe(false)
    expect(result.current.isLoading).toBe(false)
  })

  it('should update formText state', () => {
    const { result } = renderHook(() => useWinnerMovieByYear())

    act(() => {
      result.current.setformText('1994')
    })

    expect(result.current.isButtonDisabled).toBe(false)
  })

  it('should set inputValue on handleSubmit', () => {
    ;(useWinnerMovieByYearQuery as jest.Mock).mockReturnValue({
      winnerMovieByYear: [],
      isError: false,
      isLoading: false,
    })

    const { result } = renderHook(() => useWinnerMovieByYear())

    act(() => {
      result.current.setformText('1994')
    })

    act(() => {
      result.current.handleSubmit({ preventDefault: jest.fn() } as any)
    })

    expect(result.current.isButtonDisabled).toBe(false)
  })

  it('should handle no result found', () => {
    ;(useWinnerMovieByYearQuery as jest.Mock).mockReturnValue({
      winnerMovieByYear: [],
      isError: true,
      isLoading: false,
    })

    const { result } = renderHook(() => useWinnerMovieByYear())

    act(() => {
      result.current.setformText('1994')
    })

    act(() => {
      result.current.handleSubmit({ preventDefault: jest.fn() } as any)
    })

    expect(result.current.noResultFound).toBe(true)
  })
})
