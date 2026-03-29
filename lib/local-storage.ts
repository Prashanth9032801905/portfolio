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
      name: 'PODIMEKALA PRASHANTH',
      role: 'Jr. Software Engineer',
      bio: 'Computer Science graduate (B.Tech - AI & ML, 2026) with strong hands-on experience in full-stack web development. Proficient in HTML5, CSS3, JavaScript (ES6+), React.js, and modern web technologies. Built 4+ production-grade full-stack web applications through academic projects and self-learning.',
      location: 'Hyderabad, India',
      email: 'prashanthpodimekala@gmail.com',
      phone: '',
      profileImage: '/profile.jpg',
      resume: '/resumes/resume-current.pdf',
      github: 'https://github.com/Prashanth9032801905',
      linkedin: 'https://www.linkedin.com/in/podimekala-prashanth/'
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
        githubLink: 'https://github.com',
        liveLink: 'https://example.com',
        image: '',
        featured: true,
        period: 'Jan 2024 - Apr 2024'
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
        _id: '2',
        category: 'Backend & APIs',
        items: [
          { name: 'Java', icon: 'FaDatabase', color: 'text-red-500' },
          { name: 'Spring Boot', icon: 'FaNodeJs', color: 'text-green-600' },
          { name: 'Node.js', icon: 'FaNodeJs', color: 'text-green-500' },
          { name: 'Python', icon: 'FaPython', color: 'text-blue-400' },
          { name: 'REST APIs', icon: 'FaDatabase', color: 'text-gray-400' },
          { name: 'JWT Auth', icon: 'FaGitAlt', color: 'text-orange-500' },
        ]
      }
    ]
  }
}

export default LocalStorageManager
