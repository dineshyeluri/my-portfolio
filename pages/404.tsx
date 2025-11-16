import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Head>
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Page Not Found
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="btn hover:bg-white/10 transition-colors"
              >
                Go Back Home
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

