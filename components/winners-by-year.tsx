'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Years } from '@/types'

export function WinnersByYear({ winnersByYear }: { winnersByYear?: Years[] }) {
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
      </CardContent>
    </Card>
  )
}
