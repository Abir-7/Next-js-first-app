import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout=({ children })=> {
  return (
    <html lang="en">
      <body className='container mx-auto'>

        {children}
     
        </body>
    </html>
  )
}
export default RootLayout;
