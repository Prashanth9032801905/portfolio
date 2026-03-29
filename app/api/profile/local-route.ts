import { NextRequest, NextResponse } from 'next/server'
import LocalStorageManager from '@/lib/local-storage'

export async function GET() {
  try {
    const profile = LocalStorageManager.getProfile()
    return NextResponse.json(profile)
  } catch (error) {
    console.error('Profile GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    
    console.log('Profile update data:', data)
    
    LocalStorageManager.saveProfile(data)
    
    return NextResponse.json({ success: true, profile: data })
  } catch (error) {
    console.error('Profile PUT error:', error)
    return NextResponse.json({ error: 'Failed to update profile', details: error.message }, { status: 500 })
  }
}
