import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface Studio {
  name: string
  winCount: number
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function topThreeWinners(studios?: Studio[]) {
  return studios?.sort((a, b) => b.winCount - a.winCount).slice(0, 3) || []
}
