"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "./styles/globals.css"
import NextAuthProvider from '@/app/provider/NextAuthProvider'
import { SidebarProvider } from '@/context/SidebarContext'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useEffect, useState } from 'react'
import Loader from '@/components/common/Loader'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Cipher-Studio Leave-Management-System',
//   description: 'Created by',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <SidebarProvider>
      <html lang="en">
        <body className={inter.className}>

          {loading ? (
            <Loader />
          ) : (
            <main>
              <NextAuthProvider>{children}</NextAuthProvider>
            </main>
          )}

          <Toaster />
        </body>
      </html>
    </SidebarProvider>
  )
}
