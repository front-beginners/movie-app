import { IntervalAwardMinMax } from '@/types'
import { Skeleton } from './ui/skeleton'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './ui/table'
import { Choose, For } from './utility-components'

export function IntervalTableContent({
  interval,
  title,
  isLoading,
  isError,
}: {
  interval: IntervalAwardMinMax[]
  title: string
  isLoading: boolean
  isError: boolean
}) {
  return (
    <>
      <h2 className='font-semibold text-lg'>{title}</h2>
      <Table>
        <TableHeader className='w-full bg-slate-100'>
          <TableRow>
            <TableHead>Producer</TableHead>
            <TableHead>Interval</TableHead>
            <TableHead>Previous Year</TableHead>
            <TableHead>Following Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Choose>
            <Choose.When condition={isLoading}>
              <TableRow aria-label='loading'>
                <TableCell>
                  <Skeleton className='h-5 w-auto m-1' />
                </TableCell>
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
            <Choose.When condition={isError}>
              <TableRow aria-label='error'>
                <TableCell colSpan={4} className='text-center'>
                  Try again
                </TableCell>
              </TableRow>
            </Choose.When>
          </Choose>
          <For
            of={interval}
            render={(winner) => (
              <TableRow key={winner?.producer}>
                <TableCell className='font-medium w-1/4'>
                  {winner?.producer}
                </TableCell>
                <TableCell className='font-medium'>
                  {winner?.interval}
                </TableCell>
                <TableCell className='font-medium'>
                  {winner?.previousWin}
                </TableCell>
                <TableCell className='font-medium'>
                  {winner?.followingWin}
                </TableCell>
              </TableRow>
            )}
          />
        </TableBody>
      </Table>
    </>
  )
}
