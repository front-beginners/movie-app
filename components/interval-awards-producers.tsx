import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { IntervalAward } from '@/services/fetch-interval-award'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

export default function IntervalAwardsProducers({
  intervalAward,
}: {
  intervalAward?: IntervalAward
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Producers with longest and shortest interval between wins
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <h2 className='font-semibold text-lg'>Maximum</h2>
        <div className='rounded-md border'>
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
        </div>
        <h2 className='font-semibold text-lg'>Minimum</h2>
        <div className='rounded-md border'>
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
              {intervalAward?.min.map((winner) => {
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
        </div>
      </CardContent>
    </Card>
  )
}
