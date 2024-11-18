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

export default function MoviesWinnersByYear({
  intervalAward,
}: {
  intervalAward?: IntervalAward
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>List movies winners by year</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <Table>
          <TableHeader className='w-full bg-slate-100'>
            <TableRow>
              <TableHead>Producer</TableHead>
              <TableHead>Interval</TableHead>
              <TableHead>Previos Year</TableHead>
              <TableHead>Following Year</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {intervalAward?.max.map((winner) => {
              return (
                <TableRow key={winner?.producer}>
                  <TableCell className='font-medium'>
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
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
