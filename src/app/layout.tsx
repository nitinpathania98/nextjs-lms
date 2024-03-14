"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthProvider from '@/app/provider/NextAuthProvider'
import { SidebarProvider } from '@/context/SidebarContext'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import Loader from '@/components/common/Loader'
import { Providers } from './provider'
// import socket io
import io from 'socket.io-client';
const socket = io('http://localhost:8080');

// import toast component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  useEffect(() => {
    const socket = io('http://localhost:8080');

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
    });

    socket.on('notification', (data) => {
      console.log(data)
      // Make sure to use the correct property names as sent from your server
      const notificationMessage = `${data.message}`;
      toast(notificationMessage); // Display the notification
    });

    return () => {
      socket.off('connect');
    };
  }, [socket]);

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     toast(message);
  //   });

  //   socket.on('notification', (data) => {
  //     const notificationMessage = ` ${data.message} .`;

  //     toast(notificationMessage);
  //     // Example: Show a notification

  //   })
  //   return () => {
  //     socket.off();
  //   }
  // }, [socket]);


  return (
    <SidebarProvider>
      <html lang="en">
        <body className={inter.className}>

          {loading ? (
            <Loader />
          ) : (
            <main>
              <NextAuthProvider>
                <Providers>

                  {children}

                </Providers>
              </NextAuthProvider>
            </main>
          )}
          <ToastContainer />
          <Toaster />

        </body>
      </html>
    </SidebarProvider>
  )
}
