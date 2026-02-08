import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hugo Escandon | Frontend Developer & MarTech Specialist',
  description: 'Frontend Developer and MarTech Specialist with expertise in JavaScript, React, TypeScript, Node.js, and marketing technology solutions including GTM, GA4, and Adobe Analytics.',
  keywords: ['Frontend Developer', 'MarTech Specialist', 'React', 'JavaScript', 'TypeScript', 'Google Tag Manager', 'GA4', 'Hugo Escandon'],
  authors: [{ name: 'Hugo Escandon' }],
  openGraph: {
    title: 'Hugo Escandon | Frontend Developer & MarTech Specialist',
    description: 'Frontend Developer and MarTech Specialist building scalable marketing technology solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  )
}
