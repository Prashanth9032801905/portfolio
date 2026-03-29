'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

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

const DynamicHero = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = profile ? [profile.role] : ['Jr. Software Engineer']

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/portfolio')
      const data = await response.json()
      setProfile(data.profile)
    } catch (error) {
      console.error('Failed to fetch profile:', error)
    }
  }

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
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
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
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {profile.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
              >
                <FaGithub />
                <span>View Projects</span>
              </motion.a>

              <motion.a
                href={profile.resume || '#'}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 glass text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 flex items-center gap-2"
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
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <FaGithub size={20} />
              </motion.a>

              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
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
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-30 scale-110" />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image
                  src={profile.profileImage || '/profile.svg'}
                  alt={profile.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
                
                {/* Fallback Text if no image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <div className="text-4xl lg:text-6xl font-bold gradient-text mb-2">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-sm">Profile Photo</div>
                  </div>
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Orbs */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary rounded-full opacity-60"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${80 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
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

export default DynamicHero
