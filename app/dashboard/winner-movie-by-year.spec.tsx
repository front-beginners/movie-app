import { render, screen, fireEvent } from '@testing-library/react'
import { WinnerMovieByYear } from './winner-movie-by-year'
import { useWinnerMovieByYear } from '@/hooks/use-winner-movie-by-year'
import type { WinnerMovieByYear as WinnerMovieByYearType } from '@/types'

jest.mock('@/hooks/use-winner-movie-by-year')

describe('WinnerMovieByYear', () => {
  const mockUseWinnerMovieByYear = useWinnerMovieByYear as jest.MockedFunction<
    typeof useWinnerMovieByYear
  >

  beforeEach(() => {
    mockUseWinnerMovieByYear.mockReturnValue({
      handleSubmit: jest.fn(),
      setformText: jest.fn(),
      isButtonDisabled: false,
      noResultFound: false,
      winnerMovieByYear: [],
      isRequestError: false,
      isLoading: false,
    })
  })

  it('renders the component', () => {
    render(<WinnerMovieByYear />)
    expect(screen.getByText('List movies winners by year')).toBeInTheDocument()
  })

  it('calls handleSubmit on form submit', () => {
    const handleSubmit = jest.fn()
    mockUseWinnerMovieByYear.mockReturnValueOnce({
      ...mockUseWinnerMovieByYear(),
      handleSubmit,
    })

    render(<WinnerMovieByYear />)
    fireEvent.submit(screen.getByRole('button', { name: /search/i }))

    expect(handleSubmit).toHaveBeenCalled()
  })

  it('disables the search button when isButtonDisabled is true', () => {
    mockUseWinnerMovieByYear.mockReturnValueOnce({
      ...mockUseWinnerMovieByYear(),
      isButtonDisabled: true,
    })

    render(<WinnerMovieByYear />)
    expect(screen.getByRole('button', { name: /search/i })).toBeDisabled()
  })

  it('shows loading skeletons when isLoading is true', () => {
    mockUseWinnerMovieByYear.mockReturnValueOnce({
      ...mockUseWinnerMovieByYear(),
      isLoading: true,
    })

    render(<WinnerMovieByYear />)

    expect(screen.getAllByRole('row')).toHaveLength(2)
  })

  it('shows error message when isRequestError is true', () => {
    mockUseWinnerMovieByYear.mockReturnValueOnce({
      ...mockUseWinnerMovieByYear(),
      isRequestError: true,
    })

    render(<WinnerMovieByYear />)
    expect(screen.getByText('Try again')).toBeInTheDocument()
  })

  it('shows no results message when noResultFound is true', () => {
    mockUseWinnerMovieByYear.mockReturnValueOnce({
      ...mockUseWinnerMovieByYear(),
      noResultFound: true,
    })

    render(<WinnerMovieByYear />)
    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('renders winner movies when winnerMovieByYear is not empty', () => {
    const winnerMovies = [
      { id: 1, year: 2020, title: 'Movie 1' },
      { id: 2, year: 2021, title: 'Movie 2' },
    ] as WinnerMovieByYearType[]
    mockUseWinnerMovieByYear.mockReturnValueOnce({
      ...mockUseWinnerMovieByYear(),
      winnerMovieByYear: winnerMovies,
    })

    render(<WinnerMovieByYear />)
    expect(screen.getByText('Movie 1')).toBeInTheDocument()
    expect(screen.getByText('Movie 2')).toBeInTheDocument()
  })
})
