import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { DataTable } from './data-table'
import { useDataTable } from '@/hooks/use-data-table'

jest.mock('@/hooks/use-data-table')

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(() => new URLSearchParams('')),
}))

describe('DataTable', () => {
  const mockUseDataTable = useDataTable as jest.MockedFunction<
    typeof useDataTable
  >

  beforeEach(() => {
    mockUseDataTable.mockReturnValue({
      searchYear: '',
      setSearchYear: jest.fn(),
      setWinner: jest.fn(),
      data: { content: [], totalPages: 0, number: 0 },
      isLoading: false,
      isError: false,
      winnerQuery: 'all',
    })
    mockUseDataTable.mockClear()
  })

  it('renders without crashing', () => {
    render(<DataTable />)
    expect(screen.getByText('Id')).toBeInTheDocument()
    expect(screen.getByText('Year')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Winner')).toBeInTheDocument()
  })

  it('displays loading skeletons when loading', () => {
    mockUseDataTable.mockReturnValueOnce({
      ...mockUseDataTable(),
      isLoading: true,
    })
    render(<DataTable />)
    expect(screen.getAllByRole('row')).toHaveLength(2)
  })

  it('displays error message when there is an error', () => {
    mockUseDataTable.mockReturnValueOnce({
      ...mockUseDataTable(),
      isError: true,
    })
    render(<DataTable />)
    expect(screen.getByText('Try Again')).toBeInTheDocument()
  })

  it('displays no data message when there is no data', () => {
    render(<DataTable />)
    expect(screen.getByText('No data found')).toBeInTheDocument()
  })

  it('displays data when available', () => {
    mockUseDataTable.mockReturnValue({
      ...mockUseDataTable(),
      data: {
        content: [
          {
            id: 1,
            year: '2020',
            title: 'Movie 1',
            winner: true,
          },
          {
            id: 2,
            year: '2021',
            title: 'Movie 2',
            winner: false,
          },
        ],
      },
    })
    render(<DataTable />)
    expect(screen.getByText('Movie 1')).toBeInTheDocument()
    expect(screen.getByText('Movie 2')).toBeInTheDocument()
    expect(screen.getByText('Sim')).toBeInTheDocument()
    expect(screen.getByText('Não')).toBeInTheDocument()
  })

  it('calls setSearchYear on year input change', () => {
    const setSearchYear = jest.fn()
    mockUseDataTable.mockReturnValueOnce({
      ...mockUseDataTable(),
      setSearchYear,
    })
    render(<DataTable />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '2021' } })
    expect(setSearchYear).toHaveBeenCalledWith('2021')
  })

  it('calls setWinner on winner select change', () => {
    const setWinner = jest.fn()
    mockUseDataTable.mockReturnValue({
      ...mockUseDataTable(),
      setWinner,
    })
    render(<DataTable />)

    fireEvent.click(screen.getByRole('combobox'))
    fireEvent.click(screen.getByRole('option', { name: 'Winner' }))

    expect(setWinner).toHaveBeenCalledWith('true')
  })
})
