import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fire Protection Services - Expert Fire Safety Solutions',
  description: 'From Fire Risk Assessments, to Fire and Security installations through to maintenance, our team of experts will always offer the best fire protection services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
