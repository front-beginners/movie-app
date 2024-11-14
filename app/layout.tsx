import './globals.css'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased' suppressHydrationWarning>
        <SidebarProvider>
          <AppSidebar />
          <main className='flex flex-1 flex-col gap-4 p-4 pt-0 w-full h-screen'>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
