'use client'

import { useState, useEffect } from 'react'

export default function TestPage() {
  const [profile, setProfile] = useState<any>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/portfolio')
      const data = await response.json()
      
      if (response.ok) {
        setProfile(data)
        setError('')
      } else {
        setError(data.error || 'Failed to fetch data')
      }
    } catch (err: any) {
      setError('Network error: ' + err.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio Test Page</h1>
      
      {error && (
        <div className="bg-red-500/20 border border-red-500 p-4 rounded-lg mb-6">
          <h2 className="text-red-500 font-semibold">Error:</h2>
          <p>{error}</p>
        </div>
      )}
      
      {profile ? (
        <div className="bg-green-500/20 border border-green-500 p-4 rounded-lg">
          <h2 className="text-green-500 font-semibold">✅ Portfolio Data Loaded Successfully!</h2>
          <div className="mt-4 space-y-2">
            <p><strong>Name:</strong> {profile.profile?.name}</p>
            <p><strong>Role:</strong> {profile.profile?.role}</p>
            <p><strong>Email:</strong> {profile.profile?.email}</p>
            <p><strong>GitHub:</strong> {profile.profile?.github}</p>
            <p><strong>LinkedIn:</strong> {profile.profile?.linkedin}</p>
            <p><strong>Resume:</strong> {profile.profile?.resume || 'No resume uploaded'}</p>
            <p><strong>Projects:</strong> {profile.projects?.length || 0} projects found</p>
            <p><strong>Skills:</strong> {profile.skills?.length || 0} skill categories found</p>
          </div>
        </div>
      ) : (
        <div className="bg-yellow-500/20 border border-yellow-500 p-4 rounded-lg">
          <p>Loading portfolio data...</p>
        </div>
      )}
      
      <div className="mt-8">
        <button
          onClick={fetchProfile}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Refresh Data
        </button>
      </div>
    </div>
  )
}
