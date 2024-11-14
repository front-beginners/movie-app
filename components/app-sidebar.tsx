'use client'

import * as React from 'react'
import { List, SquareTerminal } from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar'

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: SquareTerminal,
      isActive: false,
    },
    {
      title: 'Lista',
      url: '/list',
      icon: List,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
