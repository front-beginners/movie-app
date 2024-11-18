'use-client'

import type { WinnerMovieByYear } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
} from './ui/table'
import { Input } from './ui/input'
import { Button } from './ui/button'

import { Choose, For } from './utility-components'
import useWinnerMovieByYear from '@/hooks/use-winner-movie-by-year'
import { Skeleton } from './ui/skeleton'

export function WinnerMovieByYear() {
  const {
    handleSubmit,
    setformText,
    isButtonDisabled,
    noResultFound,
    winnerMovieByYear,
    isRequestError,
    isLoading,
  } = useWinnerMovieByYear()

  return (
    <Card>
      <CardHeader>
        <CardTitle>List movies winners by year</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <Input
            type='text'
            placeholder='Search by year'
            name='searchInput'
            onChange={(e) => setformText(e.target.value)}
          />
          <Button type='submit' disabled={isButtonDisabled}>
            Search
          </Button>
        </form>

        <Table>
          <TableHeader className='w-full bg-slate-100'>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Title</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Choose>
              <Choose.When condition={isLoading}>
                <TableRow>
                  <TableCell>
                    <Skeleton className='h-5 w-auto m-1' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-5 w-auto m-1' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-5 w-auto m-1' />
                  </TableCell>
                </TableRow>
              </Choose.When>
              <Choose.When condition={isRequestError}>
                <TableRow>
                  <TableCell colSpan={3}>Try again</TableCell>
                </TableRow>
              </Choose.When>
              <Choose.When condition={noResultFound}>
                <TableRow>
                  <TableCell colSpan={3}>No results found</TableCell>
                </TableRow>
              </Choose.When>
            </Choose>

            <For
              of={winnerMovieByYear}
              render={(winner) => (
                <TableRow key={winner?.id}>
                  <TableCell>{winner?.id}</TableCell>
                  <TableCell>{winner?.year}</TableCell>
                  <TableCell>{winner?.title}</TableCell>
                </TableRow>
              )}
            />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
