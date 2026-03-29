import connectDB from './mongoose'
import Profile from '../models/Profile'
import Skill from '../models/Skill'
import Project from '../models/Project'

const initializeDatabase = async () => {
  try {
    await connectDB()
    
    // Create default profile if none exists
    const profileExists = await Profile.findOne()
    if (!profileExists) {
      const defaultProfile = new Profile({
        name: 'PODIMEKALA PRASHANTH',
        role: 'Jr. Software Engineer',
        bio: 'Computer Science graduate with hands-on experience in full-stack development, CI/CD, and AWS cloud deployment.',
        location: 'Hyderabad, India',
        email: 'prashanthpodimekala@gmail.com',
        phone: '',
        profileImage: '/profile.jpg',
        resume: '',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      })
      await defaultProfile.save()
      console.log('Default profile created')
    }

    // Create default skills if none exist
    const skillsExist = await Skill.find()
    if (skillsExist.length === 0) {
      const defaultSkills = [
        {
          category: 'Frontend',
          items: [
            { name: 'React.js', icon: 'FaReact', color: 'text-cyan-400' },
            { name: 'TypeScript', icon: 'SiTypescript', color: 'text-blue-400' },
            { name: 'Redux', icon: 'SiRedux', color: 'text-purple-500' },
            { name: 'HTML5', icon: 'FaHtml5', color: 'text-orange-500' },
            { name: 'CSS3', icon: 'FaCss3Alt', color: 'text-blue-500' },
            { name: 'JavaScript', icon: 'FaJs', color: 'text-yellow-400' },
          ]
        },
        {
          category: 'Backend & APIs',
          items: [
            { name: 'Java', icon: 'FaDatabase', color: 'text-red-500' },
            { name: 'Spring Boot', icon: 'FaNodeJs', color: 'text-green-600' },
            { name: 'Node.js', icon: 'FaNodeJs', color: 'text-green-500' },
            { name: 'Python', icon: 'FaPython', color: 'text-blue-400' },
            { name: 'REST APIs', icon: 'FaDatabase', color: 'text-gray-400' },
            { name: 'JWT Auth', icon: 'FaGitAlt', color: 'text-orange-500' },
          ]
        },
        {
          category: 'Cloud & DevOps',
          items: [
            { name: 'AWS EC2', icon: 'FaAws', color: 'text-orange-400' },
            { name: 'AWS RDS', icon: 'FaDatabase', color: 'text-blue-500' },
            { name: 'Docker', icon: 'FaDocker', color: 'text-blue-500' },
            { name: 'GitHub Actions', icon: 'FaGithub', color: 'text-gray-200' },
            { name: 'Git', icon: 'FaGitAlt', color: 'text-red-500' },
            { name: 'CI/CD', icon: 'FaGitAlt', color: 'text-purple-500' },
          ]
        },
        {
          category: 'Databases & Testing',
          items: [
            { name: 'MySQL', icon: 'SiMongodb', color: 'text-blue-600' },
            { name: 'PostgreSQL', icon: 'SiPostgresql', color: 'text-blue-600' },
            { name: 'JUnit', icon: 'SiJest', color: 'text-red-400' },
            { name: 'Postman', icon: 'FaDatabase', color: 'text-orange-500' },
            { name: 'TensorFlow', icon: 'FaPython', color: 'text-orange-600' },
            { name: 'Power BI', icon: 'FaDatabase', color: 'text-yellow-500' },
          ]
        }
      ]
      
      await Skill.insertMany(defaultSkills)
      console.log('Default skills created')
    }

    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Database initialization failed:', error)
  }
}

export default initializeDatabase
