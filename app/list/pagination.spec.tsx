import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './pagination'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(),
}))

describe('Pagination', () => {
  const setup = (totalPages: number, page: number) => {
    render(
      <Pagination
        totalPages={totalPages}
        page={page}
        searchParams={new URLSearchParams('')}
      />
    )
  }

  it('renders pagination component', () => {
    setup(10, 0)
    expect(screen.getByText('Page 1 of 10 pages')).toBeInTheDocument()
  })

  it('disables first and previous buttons on first page', () => {
    setup(10, 0)
    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toBeDisabled()
    expect(buttons[1]).toBeDisabled()
  })

  it('disables last and next buttons on last page', () => {
    setup(10, 9)
    const buttons = screen.getAllByRole('button')

    expect(buttons[buttons.length - 2]).toBeDisabled()
    expect(buttons[buttons.length - 2]).toBeDisabled()
  })

  it('enables all buttons on a middle page', () => {
    setup(10, 5)

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toBeEnabled()
    expect(buttons[1]).toBeEnabled()
    expect(buttons[buttons.length - 2]).toBeEnabled()
    expect(buttons[buttons.length - 1]).toBeEnabled()
  })

  it('navigates to the correct page when a page number is clicked', () => {
    setup(10, 5)
    const pageButton = screen.getByText('6')
    fireEvent.click(pageButton)

    expect(screen.getByText('Page 6 of 10 pages')).toBeInTheDocument()
  })
})
