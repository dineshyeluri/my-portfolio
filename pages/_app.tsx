import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1 pt-80 sm:pt-88 md:pt-96 lg:pt-[120px] pb-6 sm:pb-8 md:pb-10">
        <Component {...pageProps} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
