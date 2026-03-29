import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Podimekala Prashanth - Frontend Developer',
  description: 'Frontend Developer & Jr. Software Engineer specializing in React, Next.js, and modern web technologies. Building scalable and beautiful web applications.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'Web Developer', 'JavaScript', 'TypeScript'],
  author: 'Podimekala Prashanth',
  openGraph: {
    title: 'Podimekala Prashanth - Frontend Developer',
    description: 'Frontend Developer & Jr. Software Engineer specializing in React, Next.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://prashanth-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podimekala Prashanth - Frontend Developer',
    description: 'Frontend Developer & Jr. Software Engineer specializing in React, Next.js, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}
