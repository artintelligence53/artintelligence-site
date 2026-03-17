import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: 'ARTintelligence - Enterprise AI Automation',
  description: 'Stop losing time on manual work. We implement AI systems that automate your operations, capture every lead, and save hours every day.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
