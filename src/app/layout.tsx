import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import LandingPage from '@/components/LandingPage'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Instasany',
  description: 'Projeto criado para o canal do Codeboost',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Simple landing page" />
      </head>
      
      <body className={epilogue.className}>
        <LandingPage />
        <Header />
        {children}
      </body>
    </html>
  )
}
