import { NextResponse } from 'next/server'
import LocalStorageManager from '@/lib/local-storage'

export async function GET() {
  try {
    const profile = LocalStorageManager.getProfile()
    const projects = LocalStorageManager.getProjects()
    const skills = LocalStorageManager.getSkills()
    
    return NextResponse.json({
      profile,
      projects,
      skills
    })
  } catch (error) {
    console.error('Portfolio data error:', error)
    return NextResponse.json({ error: 'Failed to fetch portfolio data' }, { status: 500 })
  }
}
