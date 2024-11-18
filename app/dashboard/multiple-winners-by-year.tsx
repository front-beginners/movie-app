'use client'

import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'
import { Choose, For } from '../../components/utility-components'
import { Skeleton } from '../../components/ui/skeleton'
import { useMultipleWinnersQuery } from '@/hooks/use-multiple-winners-query'

export function MultipleWinnersByYear() {
  const { multipleWinners, isLoading, isError } = useMultipleWinnersQuery()

  return (
    <Card>
      <CardHeader>
        <CardTitle>List years with multiple winners</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className='w-full bg-slate-100'>
              <TableHead>Year</TableHead>
              <TableHead>Win Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Choose>
              <Choose.When condition={isLoading}>
                <For
                  of={Array.from({ length: 3 })}
                  render={(_, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Skeleton className='h-5 w-auto m-1' />
                      </TableCell>
                      <TableCell>
                        <Skeleton className='h-5 w-auto m-1' />
                      </TableCell>
                    </TableRow>
                  )}
                />
              </Choose.When>
              <Choose.When condition={isError}>
                <TableRow>
                  <TableCell colSpan={2} className='text-center'>
                    Try again
                  </TableCell>
                </TableRow>
              </Choose.When>
            </Choose>
            <For
              of={multipleWinners}
              render={(winnerByYear) => (
                <TableRow key={winnerByYear.year}>
                  <TableCell className='font-medium'>
                    {winnerByYear.year}
                  </TableCell>
                  <TableCell className='font-medium'>
                    {winnerByYear.winnerCount}
                  </TableCell>
                </TableRow>
              )}
            />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
