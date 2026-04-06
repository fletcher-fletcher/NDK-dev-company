import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// ИСПРАВЛЕНО: используем ОТНОСИТЕЛЬНЫЕ пути вместо @/
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'НДК | Национальная девелоперская компания',
  description: 'Стратегический партнер Инвестиционной Группы АБСОЛЮТ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans bg-white`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}