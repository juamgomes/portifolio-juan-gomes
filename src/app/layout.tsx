import './globals.css'
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Portifólio',
  description: 'Portifólio Juan Gomes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
