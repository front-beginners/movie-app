import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Studio } from '@/services/fetch-studios'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

export default function TopStudios({
  topThreeStudios,
}: {
  topThreeStudios?: Studio[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 3 Studios With Winners</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className='w-full bg-slate-100'>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Win Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topThreeStudios?.map((studio) => {
              return (
                <TableRow key={studio.name}>
                  <TableCell className='font-medium'>{studio.name}</TableCell>
                  <TableCell className='font-medium'>
                    {studio.winCount}
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
