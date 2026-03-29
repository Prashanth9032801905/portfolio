'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'

const FresherAbout = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const skills = [
    { name: 'React.js', level: 90, color: 'bg-cyan-500' },
    { name: 'Java', level: 85, color: 'bg-red-500' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-500' },
    { name: 'Node.js', level: 75, color: 'bg-green-500' },
    { name: 'AWS', level: 70, color: 'bg-orange-500' },
    { name: 'Python', level: 65, color: 'bg-yellow-500' }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Computer Science graduate passionate about building modern web applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Personal Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  <FaGraduationCap className="inline-block mr-2 text-primary" />
                  Academic Background
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-medium text-white">B.Tech - AI & Machine Learning</h4>
                      <p className="text-gray-400">JNTU University • 2022 - 2026</p>
                      <p className="text-gray-300 text-sm mt-1">
                        Specializing in software development and cloud technologies
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Full Stack Development</h4>
                      <p className="text-gray-400">Self-Taught • 2022 - Present</p>
                      <p className="text-gray-300 text-sm mt-1">
                        Building production-grade applications through academic projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  <FaGithub className="inline-block mr-2 text-primary" />
                  Project Achievements
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">4+</span>
                    </div>
                    <div>
                      <p className="text-white">Full-stack applications built</p>
                      <p className="text-gray-400 text-sm">Through academic and personal projects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-bold">12+</span>
                    </div>
                    <div>
                      <p className="text-white">REST APIs developed</p>
                      <p className="text-gray-400 text-sm">With proper documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold">85%</span>
                    </div>
                    <div>
                      <p className="text-white">Test coverage achieved</p>
                      <p className="text-gray-400 text-sm">Using JUnit and testing frameworks</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Skills & Contact */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Technical Skills
                </h3>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-2 rounded-full ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-primary" />
                    <a 
                      href="mailto:prashanthpodimekala@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      prashanthpodimekala@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-secondary" />
                    <span className="text-gray-300">Hyderabad, India</span>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href="https://github.com/Prashanth9032801905"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary/30 transition-all duration-300"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    
                    <motion.a
                      href="https://www.linkedin.com/in/podimekala-prashanth/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary/30 transition-all duration-300"
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Looking for Opportunities
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                I'm eager to start my professional journey as a Jr. Software Engineer. 
                With strong academic foundation and hands-on project experience, 
                I'm ready to contribute to innovative web development projects.
              </p>
              <motion.a
                href="/resumes/resume-current.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 gradient-border hover-glow"
              >
                <div className="gradient-border-inner px-6 py-3">
                  <span>Download My Resume</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FresherAbout
