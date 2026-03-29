'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaPython, FaDatabase, FaAws } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiJest } from 'react-icons/si'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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

  const projects = [
    {
      id: 1,
      title: "Task Management System",
      description: "Full-stack web application with responsive UI, Redux state management, and REST API integration. Developed 12+ RESTful API endpoints with documentation and achieved 85% test coverage with JUnit.",
      techStack: [
        { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
        { name: "Java", icon: <FaDatabase />, color: "text-red-500" },
        { name: "Spring Boot", icon: <FaNodeJs />, color: "text-green-600" },
        { name: "MySQL", icon: <SiMongodb />, color: "text-blue-600" },
        { name: "JUnit", icon: <SiJest />, color: "text-red-400" },
        { name: "GitHub Actions", icon: <FaGithub />, color: "text-gray-200" },
      ],
      github: "https://github.com/Prashanth9032801905",
      live: "https://example.com",
      featured: true,
      period: "Jan 2024 - Apr 2024"
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description: "Cloud-hosted web application deployed on AWS EC2 and RDS, reducing order processing time by 35%. Implemented role-based UI for 3 user types with secure session management.",
      techStack: [
        { name: "Java", icon: <FaDatabase />, color: "text-red-500" },
        { name: "Spring Boot", icon: <FaNodeJs />, color: "text-green-600" },
        { name: "MySQL", icon: <SiMongodb />, color: "text-blue-600" },
        { name: "AWS EC2", icon: <FaAws />, color: "text-orange-400" },
        { name: "AWS RDS", icon: <FaDatabase />, color: "text-blue-500" },
        { name: "Maven", icon: <FaDatabase />, color: "text-gray-400" },
      ],
      github: "https://github.com/Prashanth9032801905",
      live: "https://example.com",
      featured: true,
      period: "Sep 2022 - Feb 2023"
    },
    {
      id: 3,
      title: "Text-to-Speech & Speech-to-Text System",
      description: "AI-powered web application using Python, NLP, and TensorFlow for speech recognition and synthesis. Built with React.js frontend and REST API backend.",
      techStack: [
        { name: "Python", icon: <FaPython />, color: "text-blue-400" },
        { name: "TensorFlow", icon: <FaPython />, color: "text-orange-600" },
        { name: "NLP", icon: <FaDatabase />, color: "text-purple-500" },
        { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
        { name: "REST API", icon: <FaDatabase />, color: "text-gray-400" },
      ],
      github: "https://github.com/Prashanth9032801905",
      live: "https://example.com",
      featured: false,
      period: "Aug 2023 - Dec 2023"
    },
    {
      id: 4,
      title: "CCTV Monitoring System",
      description: "Advanced surveillance system with real-time video streaming and motion detection. Features cloud storage integration and analytics dashboard for security monitoring.",
      techStack: [
        { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
        { name: "WebRTC", icon: <FaDatabase />, color: "text-gray-400" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
      ],
      github: "https://github.com/Prashanth9032801905",
      live: "https://example.com",
      featured: false,
      period: "2023"
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing my skills in building modern web applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                {/* Glow Effect */}
                {hoveredProject === project.id && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                <div className="glass p-8 rounded-2xl h-full flex flex-col hover-glow">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10"
                        >
                          <span className={tech.color}>
                            {tech.icon}
                          </span>
                          <span className="text-xs text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 gradient-border hover-glow flex-1"
                    >
                      <div className="gradient-border-inner w-full flex items-center justify-center gap-2">
                        <FaExternalLinkAlt />
                        <span className="text-sm">Live Demo</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.a
              href="https://github.com/Prashanth9032801905"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <FaGithub />
              View More Projects on GitHub
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
