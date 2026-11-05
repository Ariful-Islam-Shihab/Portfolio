import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ariful Islam Shihab — AI/ML Researcher & Computer Vision Enthusiast',
  description: 'Ariful Islam Shihab is a Computer Science and Engineering student at United International University working on machine learning, computer vision, micro-expression analysis, and intelligent systems.',
  keywords: ['AI researcher', 'computer vision', 'machine learning', 'micro-expression analysis', 'apex frame localization', 'deep learning', 'PhD candidate', 'research portfolio'],
  authors: [{ name: 'Ariful Islam Shihab' }],
  creator: 'Ariful Islam Shihab',
  publisher: 'Ariful Islam Shihab',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arifulislamshihab.com',
    siteName: 'Ariful Islam Shihab — Portfolio',
    title: 'Ariful Islam Shihab — AI/ML Researcher & Computer Vision Enthusiast',
    description: 'Ariful Islam Shihab is a Computer Science and Engineering student at United International University working on machine learning, computer vision, micro-expression analysis, and intelligent systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ariful Islam Shihab - AI/ML Researcher Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ariful Islam Shihab — AI/ML Researcher & Computer Vision Enthusiast',
    description: 'Computer Science student at UIU working on ML, computer vision, micro-expression analysis, and intelligent systems.',
    images: ['/og-image.png'],
  },
  verification: {
    google: '[Add Google Search Console verification code]',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}