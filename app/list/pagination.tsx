import { Button } from '@/components/ui/button'
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function Pagination({
  totalPages,
  page,
}: {
  totalPages: number
  page: number
}) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const goToPage = useCallback(
    (targetPage: number) => {
      const newParams = new URLSearchParams(searchParams.toString())
      newParams.set('page', String(targetPage))
      router.push(`?${newParams.toString()}`)
    },
    [searchParams, router]
  )

  const getPageNumbers = () => {
    const totalToShow = 5
    const numbers = []

    let start = Math.max(0, page - 2)
    let end = Math.min(totalPages - 1, page + 2)

    if (end - start < totalToShow - 1) {
      if (start === 0) {
        end = Math.min(totalPages - 1, end + (totalToShow - (end - start) - 1))
      } else if (end === totalPages - 1) {
        start = Math.max(0, start - (totalToShow - (end - start) - 1))
      }
    }

    for (let i = start; i <= end; i++) {
      numbers.push(i)
    }

    return numbers
  }

  return (
    <div className='flex flex-col gap-2 items-center'>
      <p className='text-sm'>
        Page {page + 1} of {totalPages} pages
      </p>
      <div className='flex gap-2'>
        <Button onClick={() => goToPage(0)} disabled={page === 0}>
          <ChevronFirstIcon />
        </Button>
        <Button onClick={() => goToPage(page - 1)} disabled={page === 0}>
          <ChevronLeft />
        </Button>
        {getPageNumbers().map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={() => goToPage(pageNumber)}
            variant={pageNumber === page ? 'default' : 'outline'}
          >
            {pageNumber + 1}
          </Button>
        ))}
        <Button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages - 1}
        >
          <ChevronRight />
        </Button>
        <Button
          onClick={() => goToPage(totalPages - 1)}
          disabled={page === totalPages - 1}
        >
          <ChevronLastIcon />
        </Button>
      </div>
    </div>
  )
}
