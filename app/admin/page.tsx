'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaProjectDiagram, FaCode, FaChartLine } from 'react-icons/fa'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const stats = [
    { label: 'Profile', value: '1', icon: FaUser, color: 'text-primary' },
    { label: 'Projects', value: '4', icon: FaProjectDiagram, color: 'text-secondary' },
    { label: 'Skills', value: '12', icon: FaCode, color: 'text-accent' },
    { label: 'Views', value: '247', icon: FaChartLine, color: 'text-green-500' },
  ]

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {session.user?.name}!
        </h1>
        <p className="text-gray-400">
          Manage your portfolio content from here
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`text-2xl ${stat.color}`} />
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </div>
            <div className="text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass p-6 rounded-xl"
      >
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-all duration-200">
            Edit Profile
          </button>
          <button className="p-4 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary/30 transition-all duration-200">
            Add Project
          </button>
          <button className="p-4 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-all duration-200">
            Update Skills
          </button>
        </div>
      </motion.div>
    </div>
  )
}
