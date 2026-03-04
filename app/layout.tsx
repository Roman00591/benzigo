import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["800", "900"],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Benzigo — Топливные карты с экономией до 20%',
  description: 'Benzigo — профессиональные топливные карты для бизнеса. Экономия до 20%, покрытие по всей России, полный контроль расходов и персональный менеджер.',
  keywords: 'топливные карты, карта для заправки, корпоративная топливная карта, ГСМ для бизнеса, скидка на топливо',
}

export const viewport: Viewport = {
  themeColor: '#0c0c0c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
