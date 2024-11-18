'use client'

import BreadcrumbHeader from '@/components/breadcrumb-header'
import { DataTable } from './data-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Page() {
  return (
    <>
      <BreadcrumbHeader pageTitle='Lista' />
      <Card>
        <CardHeader>
          <CardTitle>List Movies</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable />
        </CardContent>
      </Card>
    </>
  )
}
