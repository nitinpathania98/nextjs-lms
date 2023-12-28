import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "./styles/globals.css"
import NextAuthProvider from '@/app/provider/NextAuthProvider'
import { SidebarProvider } from '@/context/SidebarContext'
import { Toaster } from 'react-hot-toast'

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
          <NextAuthProvider>{children}</NextAuthProvider>
          <Toaster />
        </body>
      </html>
    </SidebarProvider>
  )
}
