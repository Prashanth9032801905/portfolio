'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaProjectDiagram, 
  FaEye, 
  FaSignOutAlt 
} from 'react-icons/fa'

const menuItems = [
  { href: '/admin', icon: FaHome, label: 'Dashboard' },
  { href: '/admin/profile', icon: FaUser, label: 'Profile' },
  { href: '/admin/skills', icon: FaCode, label: 'Skills' },
  { href: '/admin/projects', icon: FaProjectDiagram, label: 'Projects' },
  { href: '/admin/preview', icon: FaEye, label: 'Preview' },
]

export default function AdminSidebar() {
  const { data: session } = useSession()
  const pathname = usePathname()

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className="w-64 bg-gray-900/50 backdrop-blur-md border-r border-white/10">
      <div className="p-6">
        <h1 className="text-2xl font-bold gradient-text">Admin Panel</h1>
      </div>

      <nav className="px-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
              pathname === item.href
                ? 'bg-primary/20 text-primary'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className="text-lg" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <FaUser className="text-primary" />
          </div>
          <div>
            <div className="text-white font-medium">{session?.user?.name}</div>
            <div className="text-gray-400 text-sm">{session?.user?.email}</div>
          </div>
        </div>
        
        <motion.button
          onClick={handleSignOut}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-all duration-200"
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </motion.button>
      </div>
    </div>
  )
}
