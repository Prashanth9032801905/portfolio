import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Only PDF and Word documents are allowed' }, { status: 400 })
    }

    // Generate filename
    const timestamp = Date.now()
    const filename = `resume-${timestamp}.${file.name.split('.').pop()}`
    
    // Save to public/resumes folder
    const path = join(process.cwd(), 'public', 'resumes', filename)
    await writeFile(path, buffer)

    return NextResponse.json({ 
      success: true, 
      filename: `/resumes/${filename}`,
      originalName: file.name
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 })
  }
}
