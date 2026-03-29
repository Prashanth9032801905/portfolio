'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa'

const Experience = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const timeline = [
    {
      id: 1,
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'B.Tech - AI & Machine Learning',
      company: 'JNTU University',
      location: 'Hyderabad, India',
      period: '2022 - 2026',
      description: 'Bachelor of Technology in Artificial Intelligence and Machine Learning with focus on software development and cloud technologies.',
      achievements: [
        'Strong foundation in Computer Science',
        'Specialization in AI/ML technologies',
        'Hands-on experience with NLP and TensorFlow',
        'Multiple full-stack project implementations'
      ]
    },
    {
      id: 2,
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Full Stack Developer - Academic Projects',
      company: 'Self-Taught & Academic Projects',
      location: 'Hyderabad, India',
      period: '2022 - Present',
      description: 'Developed multiple full-stack web applications through academic projects and self-learning, gaining practical experience in modern web technologies.',
      achievements: [
        'Built 4+ production-grade applications',
        'Developed 12+ RESTful API endpoints',
        'Achieved 85% JUnit test coverage',
        'Set up CI/CD pipelines with GitHub Actions'
      ]
    },
    {
      id: 3,
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Cloud Development Projects',
      company: 'Academic & Personal Projects',
      location: 'Hyderabad, India',
      period: '2022 - Present',
      description: 'Hands-on experience with AWS cloud deployment, building scalable applications and implementing best practices for cloud architecture.',
      achievements: [
        'Deployed applications on AWS EC2 and RDS',
        'Implemented role-based access control',
        'Reduced processing time by 35% in restaurant system',
        'Maintained CI/CD deployment pipelines'
      ]
    },
    {
      id: 4,
      type: 'certification',
      icon: <FaCertificate />,
      title: 'AWS Certified Cloud Practitioner',
      company: 'Amazon Web Services',
      location: 'Online',
      period: '2023',
      description: 'AWS certification covering cloud concepts, core services, and best practices for cloud deployment.',
      achievements: [
        'AWS EC2 and RDS expertise',
        'Cloud architecture knowledge',
        'Security and compliance understanding',
        'Cost optimization strategies'
      ]
    },
    {
      id: 5,
      type: 'certification',
      icon: <FaCertificate />,
      title: 'Full Stack Development Skills',
      company: 'Self-Learning & Projects',
      location: 'Hyderabad, India',
      period: '2022 - Present',
      description: 'Comprehensive full-stack development skills through hands-on project building, online courses, and continuous learning.',
      achievements: [
        'Mastered React.js and Redux state management',
        'Proficient in Java and Spring Boot backend',
        'Expertise in CI/CD and DevOps practices',
        'Strong database design and optimization'
      ]
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'text-primary'
      case 'education':
        return 'text-secondary'
      case 'certification':
        return 'text-accent'
      default:
        return 'text-gray-400'
    }
  }

  const getTypeBg = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-primary/20'
      case 'education':
        return 'bg-secondary/20'
      case 'certification':
        return 'bg-accent/20'
      default:
      return 'bg-gray-400/20'
    }
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent" />
      
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
              <span className="gradient-text">Academic Journey & Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My educational background and project-based learning experience in web development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full ${getTypeBg(item.type)} border-4 border-background flex items-center justify-center z-10`}>
                    <div className={getTypeColor(item.type)}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass p-6 rounded-xl hover-glow"
                    >
                      <div className="flex items-center gap-3 mb-3 md:justify-end md:flex-row-reverse">
                        <h3 className="text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeBg(item.type)} ${getTypeColor(item.type)}`}>
                          {item.type === 'work' ? 'Work' : item.type === 'education' ? 'Education' : 'Certification'}
                        </span>
                      </div>
                      
                      <div className="mb-2 md:justify-end md:flex md:flex-row-reverse">
                        <h4 className="text-lg font-semibold text-primary">
                          {item.company}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 md:justify-end md:flex-row-reverse">
                        <span>{item.location}</span>
                        <span>•</span>
                        <span>{item.period}</span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {item.achievements && (
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-400 md:justify-end">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
