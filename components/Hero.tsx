'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = [
    'Jr. Software Engineer',
    'Full Stack Developer', 
    'AI & ML Enthusiast'
  ]

  useEffect(() => {
    const currentRole = roles[currentTextIndex]
    
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 2 + 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen"
        >
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text">Podimekala Prashanth</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl mb-8 h-12"
            >
              <span className="text-secondary">I'm a </span>
              <span className="gradient-text font-semibold">
                {displayText}
                <span className="typing-cursor"></span>
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Computer Science graduate with hands-on experience in full-stack development, CI/CD, and AWS cloud deployment. Built 4+ production-grade web applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-border hover-glow flex items-center justify-center"
              >
                <div className="gradient-border-inner w-full flex items-center justify-center gap-2">
                  <FaDownload />
                  Download Resume
                </div>
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <FaGithub size={20} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
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
                  src="/profile.jpg"
                  alt="PODIMEKALA PRASHANTH"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to SVG if JPG fails
                    e.currentTarget.src = '/profile.svg';
                  }}
                />
                
                {/* Fallback Text if no image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <div className="text-4xl lg:text-6xl font-bold gradient-text mb-2">PP</div>
                    <div className="text-sm">Upload Photo</div>
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
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
