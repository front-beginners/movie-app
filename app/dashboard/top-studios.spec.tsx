import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { TopStudios } from './top-studios'
import { useStudiosQuery } from '@/hooks/use-studios-query'

jest.mock('@/hooks/use-studios-query')
const useStudiosQueryMock = useStudiosQuery as jest.Mock

describe('TopStudios', () => {
  it('renders loading state', () => {
    useStudiosQueryMock.mockReturnValue({
      studioList: null,
      isLoading: true,
      isError: false,
    })

    render(<TopStudios />)

    expect(screen.getAllByRole('row')).toHaveLength(4)
  })

  it('renders error state', () => {
    useStudiosQueryMock.mockReturnValue({
      studioList: null,
      isLoading: false,
      isError: true,
    })

    render(<TopStudios />)

    expect(screen.getByText('Try again')).toBeInTheDocument()
  })

  it('renders top studios', () => {
    const studios = [
      { name: 'Studio A', winCount: 10 },
      { name: 'Studio B', winCount: 8 },
      { name: 'Studio C', winCount: 5 },
    ]
    useStudiosQueryMock.mockReturnValue({
      studioList: { studios },
      isLoading: false,
      isError: false,
    })

    render(<TopStudios />)

    expect(screen.getByText('Studio A')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('Studio B')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('Studio C')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })
})
