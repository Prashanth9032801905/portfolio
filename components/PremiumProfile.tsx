'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface PremiumProfileProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const PremiumProfile = ({ 
  src, 
  alt, 
  size = 'lg', 
  className = '' 
}: PremiumProfileProps) => {
  const [imageError, setImageError] = useState(false)
  
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-64 h-64 lg:w-80 lg:h-80'
  }

  const ringSize = {
    sm: 'ring-2',
    md: 'ring-4',
    lg: 'ring-4',
    xl: 'ring-4'
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer Dark Gradient Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 blur-xl scale-110" />
      
      {/* Glowing Neon Purple Ring */}
      <motion.div
        className={`absolute inset-0 rounded-full ${ringSize[size]} ring-purple-500/30 blur-sm`}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Secondary Glow Ring */}
      <motion.div
        className={`absolute inset-0 rounded-full ${ringSize[size]} ring-cyan-400/20 blur-md`}
        animate={{
          scale: [1.1, 1.2, 1.1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Profile Image Container */}
      <div className={`relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl ${sizeClasses[size]}`}>
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5" />
        
        {/* Profile Image */}
        {!imageError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            onError={() => setImageError(true)}
            style={{
              filter: 'contrast(1.1) saturate(1.1) brightness(1.05)',
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="text-center text-white/80">
              <div className="text-2xl lg:text-6xl font-bold gradient-text">
                {alt.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        )}
        
        {/* Soft Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        
        {/* Edge Enhancement */}
        <div className="absolute inset-0 rounded-full shadow-inner" />
      </div>
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
          style={{
            top: `${20 + (i * 10)}%`,
            left: `${80 + (i * 5)}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Premium Badge */}
      {size === 'xl' && (
        <motion.div
          className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-3 h-3 bg-white rounded-full" />
        </motion.div>
      )}
    </div>
  )
}

export default PremiumProfile
