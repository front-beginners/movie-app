import { render, screen } from '@testing-library/react'
import { MultipleWinnersByYear } from './multiple-winners-by-year'
import { useMultipleWinnersQuery } from '../../hooks/use-multiple-winners-query'

jest.mock('@/hooks/use-multiple-winners-query')
const useMultipleWinnersQueryMock = useMultipleWinnersQuery as jest.Mock

describe('MultipleWinnersByYear', () => {
  it('renders loading state correctly', () => {
    useMultipleWinnersQueryMock.mockReturnValue({
      multipleWinners: [],
      isLoading: true,
      isError: false,
    })

    render(<MultipleWinnersByYear />)

    expect(screen.getAllByRole('row')).toHaveLength(4)
  })

  it('renders error state correctly', () => {
    useMultipleWinnersQueryMock.mockReturnValue({
      multipleWinners: [],
      isLoading: false,
      isError: true,
    })

    render(<MultipleWinnersByYear />)

    expect(screen.getByText('Try again')).toBeInTheDocument()
  })

  it('renders data correctly', () => {
    const mockData = [
      { year: 2020, winnerCount: 2 },
      { year: 2021, winnerCount: 3 },
    ]
    useMultipleWinnersQueryMock.mockReturnValue({
      multipleWinners: mockData,
      isLoading: false,
      isError: false,
    })

    render(<MultipleWinnersByYear />)

    expect(screen.getByText('2020')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('2021')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
