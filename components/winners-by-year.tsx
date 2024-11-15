'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Years } from '@/services/fetch-winners-by-year'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

export function WinnersByYear({ winnersByYear }: { winnersByYear?: Years[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>List years with multiple winners</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow className='w-full bg-slate-100'>
                <TableHead>Year</TableHead>
                <TableHead>Win Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {winnersByYear?.map((winnerByYear) => {
                return (
                  <TableRow key={winnerByYear.year}>
                    <TableCell className='font-medium'>
                      {winnerByYear.year}
                    </TableCell>
                    <TableCell className='font-medium'>
                      {winnerByYear.winnerCount}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
