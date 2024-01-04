import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "./styles/globals.css"
import NextAuthProvider from '@/app/provider/NextAuthProvider'
import { SidebarProvider } from '@/context/SidebarContext'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cipher-Studio Leave-Management-System',
  description: 'Created by',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Navbar />
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  <NextAuthProvider>{children}</NextAuthProvider>
                </div>
              </main>
            </div>
          </div>
          <Toaster />
        </body>
      </html>
    </SidebarProvider>
  )
}
