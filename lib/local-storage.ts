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

interface Project {
  _id: string
  title: string
  description: string
  techStack: Array<{ name: string; icon: string; color: string }>
  githubLink: string
  liveLink: string
  image: string
  featured: boolean
  period: string
}

interface Skill {
  _id: string
  category: string
  items: Array<{ name: string; icon: string; color: string }>
}

class LocalStorageManager {
  private static PROFILE_KEY = 'portfolio_profile'
  private static PROJECTS_KEY = 'portfolio_projects'
  private static SKILLS_KEY = 'portfolio_skills'

  // Profile Methods
  static getProfile(): ProfileData {
    if (typeof window === 'undefined') return this.getDefaultProfile()
    
    const stored = localStorage.getItem(this.PROFILE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    return this.getDefaultProfile()
  }

  static saveProfile(data: ProfileData): void {
    if (typeof window === 'undefined') return
    
    localStorage.setItem(this.PROFILE_KEY, JSON.stringify(data))
  }

  private static getDefaultProfile(): ProfileData {
    return {
      name: 'Prashanth',
      role: 'Full Stack Developer',
      bio: 'Passionate full-stack developer with expertise in modern web technologies. Specialized in React, Next.js, and creating responsive, user-friendly applications. Strong problem-solving skills and commitment to clean, efficient code.',
      location: 'Hyderabad, India',
      email: 'prashanthpodimekala@gmail.com',
      phone: '+91 XXXXXXXXXX',
      profileImage: '/profile.jpg',
      resume: '/resumes/resume-current.pdf',
      github: 'https://github.com/Prashanth9032801905',
      linkedin: 'https://www.linkedin.com/in/prashanth-podimekala/'
    }
  }

  // Projects Methods
  static getProjects(): Project[] {
    if (typeof window === 'undefined') return this.getDefaultProjects()
    
    const stored = localStorage.getItem(this.PROJECTS_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    return this.getDefaultProjects()
  }

  static saveProjects(projects: Project[]): void {
    if (typeof window === 'undefined') return
    
    localStorage.setItem(this.PROJECTS_KEY, JSON.stringify(projects))
  }

  private static getDefaultProjects(): Project[] {
    return [
      {
        _id: '1',
        title: 'Task Management System',
        description: 'Full-stack web application with responsive UI, Redux state management, and REST API integration.',
        techStack: [
          { name: 'React.js', icon: 'FaReact', color: 'text-cyan-400' },
          { name: 'Redux', icon: 'SiRedux', color: 'text-purple-500' },
          { name: 'Java', icon: 'FaDatabase', color: 'text-red-500' },
          { name: 'Spring Boot', icon: 'FaNodeJs', color: 'text-green-600' },
          { name: 'MySQL', icon: 'SiMongodb', color: 'text-blue-600' }
        ],
        githubLink: 'https://github.com/Prashanth9032801905',
        liveLink: 'https://portfolio-template-psi-ten.vercel.app',
        image: '',
        featured: true,
        period: 'Jan 2024 - Apr 2024'
      },
      {
        _id: '2',
        title: 'Restaurant Management System',
        description: 'Complete restaurant management solution with order processing, inventory tracking, and customer management.',
        techStack: [
          { name: 'Next.js', icon: 'FaReact', color: 'text-cyan-400' },
          { name: 'TypeScript', icon: 'SiTypescript', color: 'text-blue-500' },
          { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: 'text-teal-500' },
          { name: 'Node.js', icon: 'FaNodeJs', color: 'text-green-600' },
          { name: 'MongoDB', icon: 'SiMongodb', color: 'text-green-500' }
        ],
        githubLink: 'https://github.com/Prashanth9032801905',
        liveLink: 'https://portfolio-template-psi-ten.vercel.app',
        image: '',
        featured: true,
        period: 'Feb 2024 - May 2024'
      },
      {
        _id: '3',
        title: 'Speech-to-Text AI App',
        description: 'AI-powered speech recognition application with real-time transcription and voice commands.',
        techStack: [
          { name: 'Python', icon: 'FaPython', color: 'text-yellow-400' },
          { name: 'TensorFlow', icon: 'SiTensorflow', color: 'text-orange-500' },
          { name: 'React.js', icon: 'FaReact', color: 'text-cyan-400' },
          { name: 'FastAPI', icon: 'FaNodeJs', color: 'text-green-600' },
          { name: 'WebRTC', icon: 'FaMicrophone', color: 'text-red-500' }
        ],
        githubLink: 'https://github.com/Prashanth9032801905',
        liveLink: 'https://portfolio-template-psi-ten.vercel.app',
        image: '',
        featured: true,
        period: 'Mar 2024 - Jun 2024'
      },
      {
        _id: '4',
        title: 'CCTV Monitoring System',
        description: 'Security monitoring system with real-time video streaming, motion detection, and alert notifications.',
        techStack: [
          { name: 'React.js', icon: 'FaReact', color: 'text-cyan-400' },
          { name: 'WebRTC', icon: 'FaVideo', color: 'text-blue-500' },
          { name: 'Node.js', icon: 'FaNodeJs', color: 'text-green-600' },
          { name: 'Socket.io', icon: 'FaPlug', color: 'text-purple-500' },
          { name: 'OpenCV', icon: 'FaCamera', color: 'text-red-500' }
        ],
        githubLink: 'https://github.com/Prashanth9032801905',
        liveLink: 'https://portfolio-template-psi-ten.vercel.app',
        image: '',
        featured: true,
        period: 'Apr 2024 - Jul 2024'
      }
    ]
  }

  // Skills Methods
  static getSkills(): Skill[] {
    if (typeof window === 'undefined') return this.getDefaultSkills()
    
    const stored = localStorage.getItem(this.SKILLS_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    return this.getDefaultSkills()
  }

  static saveSkills(skills: Skill[]): void {
    if (typeof window === 'undefined') return
    
    localStorage.setItem(this.SKILLS_KEY, JSON.stringify(skills))
  }

  private static getDefaultSkills(): Skill[] {
    return [
      {
        _id: '1',
        category: 'Frontend Development',
        items: [
          { name: 'React.js', icon: 'FaReact', color: 'text-cyan-400' },
          { name: 'Next.js', icon: 'FaReact', color: 'text-gray-800' },
          { name: 'TypeScript', icon: 'SiTypescript', color: 'text-blue-400' },
          { name: 'Redux', icon: 'SiRedux', color: 'text-purple-500' },
          { name: 'HTML5', icon: 'FaHtml5', color: 'text-orange-500' },
          { name: 'CSS3', icon: 'FaCss3Alt', color: 'text-blue-500' },
          { name: 'JavaScript', icon: 'FaJs', color: 'text-yellow-400' },
          { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: 'text-teal-500' },
        ]
      },
      {
        _id: '2',
        category: 'Backend Development',
        items: [
          { name: 'Node.js', icon: 'FaNodeJs', color: 'text-green-500' },
          { name: 'Java', icon: 'FaJava', color: 'text-red-500' },
          { name: 'Spring Boot', icon: 'FaLeaf', color: 'text-green-600' },
          { name: 'Python', icon: 'FaPython', color: 'text-blue-400' },
          { name: 'REST APIs', icon: 'FaDatabase', color: 'text-gray-400' },
          { name: 'GraphQL', icon: 'FaPlug', color: 'text-pink-500' },
          { name: 'JWT Auth', icon: 'FaKey', color: 'text-orange-500' },
        ]
      },
      {
        _id: '3',
        category: 'Database & Tools',
        items: [
          { name: 'MongoDB', icon: 'SiMongodb', color: 'text-green-500' },
          { name: 'MySQL', icon: 'SiMysql', color: 'text-blue-600' },
          { name: 'Git', icon: 'FaGit', color: 'text-red-500' },
          { name: 'Docker', icon: 'FaDocker', color: 'text-blue-400' },
          { name: 'Webpack', icon: 'FaCube', color: 'text-blue-500' },
        ]
      },
      {
        _id: '4',
        category: 'AI & Machine Learning',
        items: [
          { name: 'TensorFlow', icon: 'SiTensorflow', color: 'text-orange-500' },
          { name: 'PyTorch', icon: 'FaFire', color: 'text-red-500' },
          { name: 'OpenCV', icon: 'FaCamera', color: 'text-blue-500' },
          { name: 'NLP', icon: 'FaBrain', color: 'text-purple-500' },
        ]
      }
    ]
  }
}

export default LocalStorageManager
