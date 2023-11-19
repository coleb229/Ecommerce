import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Ecommerce',
  description: 'Next.js Ecommerce',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  const user = session?.user

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  )
}
