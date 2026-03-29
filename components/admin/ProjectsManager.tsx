'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { FaPlus, FaEdit, FaTrash, FaUpload, FaEye, FaSave, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

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

interface ProjectFormData {
  title: string
  description: string
  techStack: string
  githubLink: string
  liveLink: string
  featured: boolean
  period: string
}

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [showForm, setShowForm] = useState(false)
  
  const { register, handleSubmit, reset, setValue } = useForm<ProjectFormData>()

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects')
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      toast.error('Failed to fetch projects')
    }
  }

  const onSubmit = async (data: ProjectFormData) => {
    setLoading(true)
    try {
      const projectData = {
        ...data,
        techStack: data.techStack.split(',').map((tech: string) => ({
          name: tech.trim(),
          icon: 'FaDatabase',
          color: 'text-gray-400'
        }))
      }

      let res: Response
      if (editingProject) {
        res = await fetch(`/api/projects/${editingProject._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectData),
        })
      } else {
        res = await fetch('/api/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectData),
        })
      }

      if (res.ok) {
        toast.success(`Project ${editingProject ? 'updated' : 'created'} successfully!`)
        fetchProjects()
        resetForm()
      } else {
        toast.error(`Failed to ${editingProject ? 'update' : 'create'} project`)
      }
    } catch (error) {
      toast.error('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success('Project deleted successfully!')
        fetchProjects()
      } else {
        toast.error('Failed to delete project')
      }
    } catch (error) {
      toast.error('An error occurred')
    }
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setValue('title', project.title)
    setValue('description', project.description)
    setValue('techStack', project.techStack.map(tech => tech.name).join(', '))
    setValue('githubLink', project.githubLink)
    setValue('liveLink', project.liveLink)
    setValue('featured', project.featured)
    setValue('period', project.period)
    setShowForm(true)
  }

  const resetForm = () => {
    reset()
    setEditingProject(null)
    setShowForm(false)
  }

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projects Manager</h1>
          <p className="text-gray-400">Manage your portfolio projects</p>
        </div>
        
        <motion.button
          onClick={() => setShowForm(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
        >
          <FaPlus />
          <span>Add Project</span>
        </motion.button>
      </motion.div>

      {/* Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-6 rounded-xl mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-6">
            {editingProject ? 'Edit Project' : 'Add New Project'}
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Title
                </label>
                <input
                  {...register('title', { required: true })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="Project name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Period
                </label>
                <input
                  {...register('period')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="e.g. Jan 2024 - Apr 2024"
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  {...register('description', { required: true })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                  placeholder="Project description..."
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tech Stack (comma-separated)
                </label>
                <input
                  {...register('techStack', { required: true })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="React.js, Node.js, MongoDB"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  GitHub Link
                </label>
                <input
                  {...register('githubLink', { required: true })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="https://github.com/username/project"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Live Link
                </label>
                <input
                  {...register('liveLink', { required: true })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="https://project-demo.com"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register('featured')}
                  className="w-4 h-4 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-primary"
                />
                <label className="text-sm text-gray-300">
                  Featured Project
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                Cancel
              </button>
              
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50"
              >
                <FaSave />
                <span>{loading ? 'Saving...' : 'Save Project'}</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              {project.featured && (
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded"
                >
                  {tech.name}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <FaGithub className="text-gray-400" />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <FaExternalLinkAlt className="text-gray-400" />
                </a>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="p-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-all duration-200"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-all duration-200"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
