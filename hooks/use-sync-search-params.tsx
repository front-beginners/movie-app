import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function useSyncSearchParams({
  debouncedValue,
  winner,
}: {
  debouncedValue: string
  winner: string
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (debouncedValue) params.set('year', debouncedValue)
    else params.delete('year')

    if (winner) params.set('winner', winner)
    else params.delete('winner')

    params.set('page', '0')
    router.replace(`${pathname}?${params.toString()}`)
  }, [debouncedValue, winner, pathname, router])
}
