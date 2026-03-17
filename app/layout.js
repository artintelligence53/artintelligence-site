import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: 'ARTintelligence - KI-Automatisierung für KMU',
  description: 'Wir helfen kleinen und mittelgrossen Unternehmen, mit smarter KI Arbeitszeit zurückzugewinnen, Antwortzeiten stark zu verkürzen und keine Anfragen mehr liegen zu lassen.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
