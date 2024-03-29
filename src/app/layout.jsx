import { Crimson_Pro } from 'next/font/google'
import './globals.css'

const crimson = Crimson_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Ceramica Viva',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={crimson.className}>{children}</body>
    </html>
  )
}
