import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongoose'
import Skill from '@/models/Skill'

export async function GET() {
  try {
    await connectDB()
    const skills = await Skill.find().sort({ category: 1 })
    return NextResponse.json(skills)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB()
    const data = await request.json()
    
    // Clear existing skills and add new ones
    await Skill.deleteMany({})
    
    const skills = await Skill.insertMany(data)
    
    return NextResponse.json(skills)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update skills' }, { status: 500 })
  }
}
