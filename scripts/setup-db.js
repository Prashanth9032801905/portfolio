const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'

async function setupDatabase() {
  const client = new MongoClient(uri)
  
  try {
    await client.connect()
    console.log('Connected to MongoDB')
    
    const db = client.db()
    
    // Create profile collection with default data
    const profileCollection = db.collection('profiles')
    const existingProfile = await profileCollection.findOne()
    
    if (!existingProfile) {
      const defaultProfile = {
        name: 'PODIMEKALA PRASHANTH',
        role: 'Jr. Software Engineer',
        bio: 'Computer Science graduate with hands-on experience in full-stack development, CI/CD, and AWS cloud deployment.',
        location: 'Hyderabad, India',
        email: 'prashanthpodimekala@gmail.com',
        phone: '',
        profileImage: '/profile.jpg',
        resume: '',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      await profileCollection.insertOne(defaultProfile)
      console.log('Default profile created')
    }
    
    console.log('Database setup completed')
  } catch (error) {
    console.error('Database setup failed:', error)
  } finally {
    await client.close()
  }
}

setupDatabase()
