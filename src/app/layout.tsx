import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Message from './components/Message'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Handel',
  description: 'Created by handel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen text-gray-300">
        <Message />
        {children}
      </body>
    </html>
  )
}
