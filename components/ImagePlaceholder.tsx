import { motion } from 'framer-motion'
import { useState } from 'react'

interface ImagePlaceholderProps {
  src?: string
  alt: string
  width?: number | string
  height?: number | string
  rounded?: boolean
  className?: string
  showIcon?: boolean
}

export default function ImagePlaceholder({
  src,
  alt,
  width = 400,
  height = 300,
  rounded = false,
  className = '',
  showIcon = true
}: ImagePlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' && height !== 'auto' ? `${height}px` : undefined,
    borderRadius: rounded ? '1rem' : '0',
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 ${className}`}
      style={style}
    >
      {src && !hasError ? (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 1.1 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ width: '100%', height: '100%', borderRadius: rounded ? '1rem' : '0', overflow: 'hidden' }}
        >
          <img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className="w-full h-full object-cover"
            style={{ borderRadius: rounded ? '1rem' : '0' }}
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(to bottom right, #1f2937, #374151, #111827)',
            borderRadius: rounded ? '1rem' : '0' 
          }}
        >
          {showIcon && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ delay: 0.2 }}
              style={{ textAlign: 'center' }}
            >
              <svg
                className="w-16 h-16 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xs text-gray-500 mt-2">Image Placeholder</p>
            </motion.div>
          )}
        </motion.div>
      )}
      
      {/* Shimmer effect while loading */}
      {isLoading && src && !hasError && (
        <motion.div
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
            borderRadius: rounded ? '1rem' : '0'
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'linear',
          }}
        />
      )}
    </div>
  )
}
