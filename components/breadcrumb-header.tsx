import { SidebarTrigger } from '@/components/ui/sidebar'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'

export default function BreadcrumbHeader({ pageTitle }: { pageTitle: string }) {
  return (
    <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className='hidden md:block'>
              <BreadcrumbLink>{pageTitle}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  )
}
