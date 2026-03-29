'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { FaUpload, FaEye, FaSave, FaUser } from 'react-icons/fa'

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

export default function ProfileEditor() {
  const { register, handleSubmit, reset, watch, setValue } = useForm<ProfileData>()
  const [loading, setLoading] = useState(false)
  const [profileImagePreview, setProfileImagePreview] = useState('')
  const resumeUrl = watch('resume')

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/profile/local-route')
      const data = await response.json()
      reset(data)
      setProfileImagePreview(data.profileImage)
    } catch (error) {
      toast.error('Failed to fetch profile')
    }
  }

  const onSubmit = async (data: ProfileData) => {
    setLoading(true)
    try {
      const response = await fetch('/api/profile/local-route', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      
      if (response.ok && result.success) {
        toast.success('Profile updated successfully!')
      } else {
        toast.error(result.error || 'Failed to update profile')
      }
    } catch (error) {
      console.error('Profile update error:', error)
      toast.error('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // For now, just show preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      
      // TODO: Upload to Cloudinary
      toast.success('Image uploaded (Cloudinary integration needed)')
    }
  }

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        toast.error('Only PDF and Word documents are allowed')
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB')
        return
      }

      try {
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        const result = await response.json()

        if (response.ok && result.success) {
          // Update form with new resume URL
          setValue('resume', result.filename)
          toast.success('Resume uploaded successfully!')
        } else {
          toast.error(result.error || 'Failed to upload resume')
        }
      } catch (error) {
        console.error('Resume upload error:', error)
        toast.error('An error occurred during upload')
      }
    }
  }

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-gray-400">Update your personal information</p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Basic Info */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                {...register('name', { required: true })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Professional Role
              </label>
              <input
                {...register('role', { required: true })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                placeholder="e.g. Full Stack Developer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                {...register('bio', { required: true })}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Location
                </label>
                <input
                  {...register('location')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  {...register('phone')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="+1234567890"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Media & Links */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Profile Image
              </label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-white/5 border border-white/10">
                  {profileImagePreview ? (
                    <img
                      src={profileImagePreview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FaUser className="text-gray-400" />
                    </div>
                  )}
                </div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="profileImage"
                  />
                  <label
                    htmlFor="profileImage"
                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-all duration-200 cursor-pointer"
                  >
                    <FaUpload />
                    <span>Upload Image</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Resume (PDF or Word)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                className="hidden"
                id="resume"
              />
              <label
                htmlFor="resume"
                className="flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary/30 transition-all duration-200 cursor-pointer"
              >
                <FaUpload />
                <span>Upload Resume</span>
              </label>
              
              {resumeUrl && (
                <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                        <FaDownload className="text-primary text-sm" />
                      </div>
                      <div>
                        <div className="text-sm text-white">Resume uploaded</div>
                        <div className="text-xs text-gray-400">Click to view/download</div>
                      </div>
                    </div>
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaDownload />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                {...register('email', { required: true })}
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                GitHub
              </label>
              <input
                {...register('github')}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                placeholder="https://github.com/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                LinkedIn
              </label>
              <input
                {...register('linkedin')}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => window.open('/', '_blank')}
            className="flex items-center gap-2 px-6 py-3 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-all duration-200"
          >
            <FaEye />
            <span>Preview</span>
          </button>
          
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50"
          >
            <FaSave />
            <span>{loading ? 'Saving...' : 'Save Changes'}</span>
          </motion.button>
        </div>
      </form>
    </div>
  )
}
