import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongoose'
import Profile from '@/models/Profile'

export async function GET() {
  try {
    await connectDB()
    let profile = await Profile.findOne()
    
    if (!profile) {
      // Create default profile if none exists
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
      profile = defaultProfile
    }
    
    return NextResponse.json(profile)
  } catch (error) {
    console.error('Profile GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB()
    const data = await request.json()
    
    console.log('Profile update data:', data)
    
    const profile = await Profile.findOneAndUpdate(
      {},
      data,
      { upsert: true, new: true }
    )
    
    console.log('Updated profile:', profile)
    
    return NextResponse.json({ success: true, profile })
  } catch (error) {
    console.error('Profile PUT error:', error)
    return NextResponse.json({ error: 'Failed to update profile', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}
