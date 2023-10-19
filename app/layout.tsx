import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import TanstackProvider from './providers/TanstackProvider'
import AuthProvider from './providers/AuthProvider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Next App',
  description: 'Created by Asif Munshi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} box-border bg-[#0000000d]`}>
        <AuthProvider>
          <TanstackProvider>
            <div>
              <Header />
              <div className="px-8">{children}</div>
            </div>
          </TanstackProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
