import { render, screen } from '@testing-library/react'
import { IntervalAwardsProducers } from './interval-awards-producers'
import { useIntervalAward } from '../../hooks/use-interval-award-query'

jest.mock('@/hooks/use-interval-award-query')
const useIntervalAwardMock = useIntervalAward as jest.Mock

describe('IntervalAwardsProducers', () => {
  it('renders loading state correctly', () => {
    useIntervalAwardMock.mockReturnValue({
      intervalMax: [],
      intervalMin: [],
      isLoading: true,
      isError: false,
    })

    render(<IntervalAwardsProducers />)

    expect(screen.getAllByLabelText('loading')).toHaveLength(2)
  })

  it('renders error state correctly', () => {
    useIntervalAwardMock.mockReturnValue({
      intervalMax: [],
      intervalMin: [],
      isLoading: false,
      isError: true,
    })

    render(<IntervalAwardsProducers />)

    expect(screen.getAllByText('Try again')).toHaveLength(2)
  })

  it('renders data correctly', () => {
    const intervalMax = [
      {
        producer: 'Producer A',
        interval: 10,
        previousWin: 1990,
        followingWin: 2000,
      },
    ]
    const intervalMin = [
      {
        producer: 'Producer B',
        interval: 11,
        previousWin: 1991,
        followingWin: 2002,
      },
    ]

    useIntervalAwardMock.mockReturnValue({
      intervalMax,
      intervalMin,
      isLoading: false,
      isError: false,
    })

    render(<IntervalAwardsProducers />)

    expect(
      screen.getByText(
        'Producers with longest and shortest interval between wins'
      )
    ).toBeInTheDocument()
    expect(screen.getByText('Maximum')).toBeInTheDocument()
    expect(screen.getByText('Producer A')).toBeInTheDocument()
    expect(screen.getByText('Minimum')).toBeInTheDocument()
    expect(screen.getByText('Producer B')).toBeInTheDocument()
  })
})
