"use client"
import { Inter } from 'next/font/google';
import 'react-circular-progressbar/dist/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'TemporalSecrets',
  description: 'Secretos!!!',
  viewport: "width=device-width, initial-scale=1.0",

}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name='google-site-verification' content='mLRkfICmtTSGxbL_jjuiPdWDONj0bj9iSLAV8O242Mc'></meta>
        <link rel="icon" href='/favicon.ico'></link>
      </head>
      <body className={inter.className}>{children}
      </body>
    </html>

  )
}
