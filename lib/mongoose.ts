// Simple mongoose connection without complex caching
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.log('MongoDB not configured, using fallback')
}

export default async function connectDB() {
  try {
    if (!MONGODB_URI) {
      return null
    }
    
    const conn = await mongoose.connect(MONGODB_URI)
    return conn
  } catch (error) {
    console.error('MongoDB connection error:', error)
    return null
  }
}
