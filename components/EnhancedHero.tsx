'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa'
import PremiumProfile from '@/components/PremiumProfile'
import LocalStorageManager from '@/lib/local-storage'

interface ProfileData {
  name: string
  role: string
  bio: string
  location: string
  email: string
  phone: string
  profileImage: string
  resume: string
  github: string
  linkedin: string
}

const EnhancedHero = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    // Use local storage manager to get profile data
    const profileData = LocalStorageManager.getProfile()
    setProfile(profileData)
  }, [])

  const roles = profile ? [profile.role, 'Full Stack Developer', 'AI & ML Enthusiast'] : ['Jr. Software Engineer']

  useEffect(() => {
    if (!roles.length) return
    
    const currentRole = roles[currentTextIndex % roles.length]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, roles])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20" />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Geometric Shapes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-primary/10"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              borderRadius: '50%',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4 h-12"
            >
              <span>{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-2"
              >
                |
              </motion.span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {profile.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-3 text-lg"
              >
                <FaGithub />
                <span>View Projects</span>
              </motion.a>

              <motion.a
                href={profile.resume || '#'}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 flex items-center gap-3 text-lg border border-white/20"
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 border border-white/20"
              >
                <FaGithub size={24} />
              </motion.a>

              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 border border-white/20"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Premium Profile Component */}
              <PremiumProfile
                src={profile.profileImage || '/profile.jpg'}
                alt={profile.name}
                size="xl"
              />
              
              {/* Additional Effects */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default EnhancedHero
