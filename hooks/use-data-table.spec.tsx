import { renderHook, act } from '@testing-library/react'
import { useDataTable } from './use-data-table'
import { useMovieList } from '@/hooks/use-movie-list'
import useDebounce from '@/hooks/use-debounce'
import { useSyncSearchParams } from '@/hooks/use-sync-search-params'
import { useSearchParams } from 'next/navigation'

jest.mock('@/hooks/use-movie-list')
jest.mock('@/hooks/use-debounce')
jest.mock('@/hooks/use-sync-search-params')
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}))

describe('useDataTable', () => {
  const mockUseMovieList = useMovieList as jest.Mock
  const mockUseDebounce = useDebounce as jest.Mock
  const mockUseSyncSearchParams = useSyncSearchParams as jest.Mock
  const mockUseSearchParams = useSearchParams as jest.Mock

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn((key) => {
        switch (key) {
          case 'page':
            return '1'
          case 'year':
            return '2021'
          case 'winner':
            return 'true'
          default:
            return null
        }
      }),
    })
    mockUseMovieList.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    })
    mockUseDebounce.mockReturnValue('2021')
    mockUseSyncSearchParams.mockImplementation(() => {})
  })

  it('should initialize with correct values from search params', () => {
    const { result } = renderHook(() => useDataTable())

    expect(result.current.page).toBe('1')
    expect(result.current.searchYear).toBe('2021')
    expect(result.current.winner).toBe('true')
    expect(result.current.data).toEqual([])
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  it('should update searchYear state', () => {
    const { result } = renderHook(() => useDataTable())

    act(() => {
      result.current.setSearchYear('2022')
    })

    expect(result.current.searchYear).toBe('2022')
  })

  it('should update winner state', () => {
    const { result } = renderHook(() => useDataTable())

    act(() => {
      result.current.setWinner('false')
    })

    expect(result.current.winner).toBe('false')
  })
})
