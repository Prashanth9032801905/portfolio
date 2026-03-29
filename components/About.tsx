'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
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
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

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
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Aspiring Jr. Software Engineer
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                Computer Science graduate (B.Tech - AI & ML, 2026) with strong hands-on experience in full-stack web development. Proficient in HTML5, CSS3, JavaScript (ES6+), React.js, and modern web technologies.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Built <span className="text-secondary font-semibold">4+ production-grade full-stack web applications</span> through academic projects and self-learning. Gained expertise in CI/CD pipelines (GitHub Actions), DevOps practices, and AWS cloud deployment.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Eager to start my professional journey as a Jr. Software Engineer with a passion for creating scalable, efficient web applications and exploring AI/ML technologies.
              </p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="gradient-border">
                <div className="gradient-border-inner">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <span className="text-gray-300">Based in Hyderabad, India</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                      <span className="text-gray-300">2+ Years of Experience</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                      <span className="text-gray-300">Open to Opportunities</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-3">Let's Connect!</h4>
                    <p className="text-gray-300">
                      I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate!
                    </p>
                    <div className="mt-4">
                      <a 
                        href="mailto:prashanthpodimekala@gmail.com"
                        className="text-secondary hover:text-primary transition-colors duration-300 font-medium"
                      >
                        prashanthpodimekala@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "4+", label: "Projects Built" },
              { number: "12+", label: "REST APIs" },
              { number: "85%", label: "Test Coverage" },
              { number: "AWS", label: "Certified" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
