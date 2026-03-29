'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaDatabase, FaPalette, FaMobile } from 'react-icons/fa'

export default function NewPortfolio() {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Prashanth9032801905'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/Prashanth9032801905'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecasts and maps',
      tech: ['React', 'API Integration', 'Chart.js', 'CSS3'],
      github: 'https://github.com/Prashanth9032801905'
    }
  ]

  const skills = {
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    'Tools': ['Git', 'VS Code', 'Figma', 'Docker', 'AWS']
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-400">Prashanth</h1>
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`hover:text-blue-400 transition-colors ${activeSection === item.id ? 'text-blue-400' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Prashanth</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional web applications that solve real-world problems
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Prashanth9032801905"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-blue-400 hover:bg-blue-400 px-8 py-3 rounded-full transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              I specialize in modern web technologies and enjoy building applications that are not just functional, 
              but also beautiful and user-friendly.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying a good cup of coffee while planning my next project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaGithub /> View Code
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{category}</h3>
                <div className="space-y-2">
                  {items.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-blue-400" />
                    <span>prashanthpodimekala@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhone className="text-blue-400" />
                    <span>+91 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Prashanth9032801905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prashanth-podimekala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>&copy; 2024 Prashanth. All rights reserved.</p>
      </footer>
    </div>
  )
}
