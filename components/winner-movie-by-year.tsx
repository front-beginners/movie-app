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

export function WinnerMovieByYear({
  winnerByMovie,
}: {
  winnerByMovie?: WinnerMovieByYear[]
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
              <TableHead>Id</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Title</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {winnerByMovie?.map((winner) => {
              return (
                <TableRow key={winner?.id}>
                  <TableCell>{winner?.id}</TableCell>
                  <TableCell>{winner?.year}</TableCell>
                  <TableCell>{winner?.title}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
