import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'RentWheels',
  description: 'Discover the best cars for rent in your area.',
  icons: {
    icon:'/favicon-32x32(2).png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
