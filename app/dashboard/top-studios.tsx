'use client'
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
import { useStudiosQuery } from '@/hooks/use-studios-query'
import { topThreeWinners } from '@/lib/utils'
import { Choose, For } from '../../components/utility-components'
import { Skeleton } from '../../components/ui/skeleton'

export function TopStudios() {
  const { studioList, isLoading, isError } = useStudiosQuery()
  const topThreeStudios = topThreeWinners(studioList?.studios)

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
                  <TableCell colSpan={3}>Try again</TableCell>
                </TableRow>
              </Choose.When>
            </Choose>
            <For
              of={topThreeStudios}
              render={(studio) => (
                <TableRow key={studio.name}>
                  <TableCell className='font-medium'>{studio.name}</TableCell>
                  <TableCell className='font-medium'>
                    {studio.winCount}
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
