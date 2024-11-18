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
  console.log(winnerByMovie)
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

// import React from 'react'
// import { WinnerMovieByYear } from '@/types'
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from './ui/table'

// export default function WinnerMovieByYear({
//   winnerByMovie,
// }: {
//   winnerByMovie: WinnerMovieByYear
// }) {
//   return (
//     <Card>
//
//       <CardContent className='flex flex-col gap-4'>
//         <Table>
//           <TableHeader className='w-full bg-slate-100'>
//             <TableRow>
//               <TableHead>Producer</TableHead>
//               <TableHead>Interval</TableHead>
//               <TableHead>Previos Year</TableHead>
//               <TableHead>Following Year</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {winnerByMovie?.map((winner) => {
//               return (
//                 <TableRow key={winner?.}>
//                   <TableCell className='font-medium'>
//                     {winner?.producer}
//                   </TableCell>
//                   <TableCell className='font-medium'>
//                     {winner?.interval}
//                   </TableCell>
//                   <TableCell className='font-medium'>
//                     {winner?.previousWin}
//                   </TableCell>
//                   <TableCell className='font-medium'>
//                     {winner?.followingWin}
//                   </TableCell>
//                 </TableRow>
//               )
//             })}
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   )
// }
