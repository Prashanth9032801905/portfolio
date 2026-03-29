import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PODIMEKALA PRASHANTH - Portfolio',
  description: 'Computer Science graduate specializing in AI & ML, passionate about full-stack web development',
  keywords: ['Web Developer', 'Full Stack', 'React', 'Next.js', 'TypeScript', 'AI/ML'],
  authors: [{ name: 'PODIMEKALA PRASHANTH' }],
  openGraph: {
    title: 'PODIMEKALA PRASHANTH - Portfolio',
    description: 'Computer Science graduate specializing in AI & ML, passionate about full-stack web development',
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-template-psi-ten.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PODIMEKALA PRASHANTH - Portfolio',
    description: 'Computer Science graduate specializing in AI & ML, passionate about full-stack web development',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
