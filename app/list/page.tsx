'use client'

import BreadcrumbHeader from '@/components/breadcrumb-header'
import { DataTable } from './data-table'

export default function Page() {
  return (
    <>
      <BreadcrumbHeader pageTitle='Lista' />
      <DataTable />
    </>
  )
}
