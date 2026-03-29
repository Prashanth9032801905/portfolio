import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongoose'
import Project from '@/models/Project'

export async function GET() {
  try {
    await connectDB()
    const projects = await Project.find().sort({ createdAt: -1 })
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const data = await request.json()
    
    const project = new Project(data)
    await project.save()
    
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
