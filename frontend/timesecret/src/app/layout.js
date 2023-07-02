import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TemporalSecrets',
  description: 'Secretos!!!',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name='google-site-verification' content='mLRkfICmtTSGxbL_jjuiPdWDONj0bj9iSLAV8O242Mc'></meta>
      </head>
      <body className={inter.className}>{children}</body>
      
    </html>
    
  )
}
