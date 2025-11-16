import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1 pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-6 sm:pb-8 md:pb-10">
        <Component {...pageProps} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
