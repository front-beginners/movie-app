'use client'

import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Choose, For } from '@/components/utility-components'

import { Pagination } from './pagination'
import { useDataTable } from '@/hooks/use-data-table'

export function DataTable() {
  const {
    searchYear,
    setSearchYear,
    setWinner,
    data,
    isLoading,
    isError,
    winnerQuery,
  } = useDataTable()

  return (
    <div className='flex flex-col gap-2 items-center'>
      <Table>
        <TableHeader>
          <TableRow className='w-full bg-slate-100'>
            <TableHead>Id</TableHead>
            <TableHead>
              Year
              <Input
                value={searchYear}
                onChange={(e) => setSearchYear(e.target.value)}
              ></Input>
            </TableHead>
            <TableHead>Title</TableHead>
            <TableHead>
              Winner
              <select
                className='ml-2'
                onChange={(value) => setWinner(value.target.value)}
              >
                <option value=''>All</option>
                <option value='true' selected={winnerQuery === 'true'}>
                  Winner
                </option>
                <option value='false' selected={winnerQuery === 'false'}>
                  Not Winner
                </option>
              </select>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Choose>
            <Choose.When condition={isError}>
              <TableRow>
                <TableCell colSpan={4} className='text-center'>
                  Try Again
                </TableCell>
              </TableRow>
            </Choose.When>
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
                <TableCell>
                  <Skeleton className='h-5 w-auto m-1' />
                </TableCell>
              </TableRow>
            </Choose.When>
            <Choose.When condition={data?.content.length === 0}>
              <TableRow>
                <TableCell colSpan={4} className='text-center'>
                  No data found
                </TableCell>
              </TableRow>
            </Choose.When>
            <Choose.Otherwise>
              <For
                of={data?.content || []}
                render={(movie) => (
                  <TableRow key={movie?.id}>
                    <TableCell>{movie?.id}</TableCell>
                    <TableCell>{movie?.year}</TableCell>
                    <TableCell>{movie?.title}</TableCell>
                    <TableCell>{movie?.winner ? 'Sim' : 'Não'}</TableCell>
                  </TableRow>
                )}
              />
            </Choose.Otherwise>
          </Choose>
        </TableBody>
      </Table>
      {data && data.content.length > 0 && (
        <Pagination totalPages={data.totalPages} page={data.number} />
      )}
    </div>
  )
}
