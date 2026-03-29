'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaPython,
  FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGithub
} from 'react-icons/fa'
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql,
  SiRedux, SiJest, SiWebpack, SiVercel, SiGraphql, SiFirebase
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-4xl" />,
      skills: [
        { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      ]
    },
    {
      title: "Backend & APIs",
      icon: <FaNodeJs className="text-4xl" />,
      skills: [
        { name: "Java", icon: <FaDatabase />, color: "text-red-500" },
        { name: "Spring Boot", icon: <FaNodeJs />, color: "text-green-600" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Python", icon: <FaPython />, color: "text-blue-400" },
        { name: "REST APIs", icon: <FaDatabase />, color: "text-gray-400" },
        { name: "JWT Auth", icon: <FaGitAlt />, color: "text-orange-500" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaAws className="text-4xl" />,
      skills: [
        { name: "AWS EC2", icon: <FaAws />, color: "text-orange-400" },
        { name: "AWS RDS", icon: <FaDatabase />, color: "text-blue-500" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
        { name: "GitHub Actions", icon: <FaGithub />, color: "text-gray-200" },
        { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
        { name: "CI/CD", icon: <FaGitAlt />, color: "text-purple-500" },
      ]
    },
    {
      title: "Databases & Testing",
      icon: <FaDatabase className="text-4xl" />,
      skills: [
        { name: "MySQL", icon: <SiMongodb />, color: "text-blue-600" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
        { name: "JUnit", icon: <SiJest />, color: "text-red-400" },
        { name: "Postman", icon: <FaDatabase />, color: "text-orange-500" },
        { name: "TensorFlow", icon: <FaPython />, color: "text-orange-600" },
        { name: "Power BI", icon: <FaDatabase />, color: "text-yellow-500" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-secondary/5 to-transparent" />
      
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
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies I use to build exceptional web applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass p-6 rounded-xl hover-glow"
              >
                <div className="flex items-center justify-center mb-6 text-primary">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white text-center mb-6">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(139, 92, 246, 0.1)'
                      }}
                      className="flex items-center gap-2 p-3 rounded-lg glass-dark transition-all duration-300 cursor-default"
                    >
                      <div className={`${skill.color} text-xl`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="gradient-border inline-block">
              <div className="gradient-border-inner px-8 py-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Always Learning, Always Growing
                </h4>
                <p className="text-gray-400">
                  I'm constantly exploring new technologies and frameworks to stay at the cutting edge of web development.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
