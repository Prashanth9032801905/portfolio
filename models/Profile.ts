import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'PODIMEKALA PRASHANTH'
  },
  role: {
    type: String,
    required: true,
    default: 'Jr. Software Engineer'
  },
  bio: {
    type: String,
    required: true,
    default: 'Computer Science graduate with hands-on experience in full-stack development, CI/CD, and AWS cloud deployment.'
  },
  location: {
    type: String,
    required: true,
    default: 'Hyderabad, India'
  },
  email: {
    type: String,
    required: true,
    default: 'prashanthpodimekala@gmail.com'
  },
  phone: {
    type: String,
    default: ''
  },
  profileImage: {
    type: String,
    default: '/profile.svg'
  },
  resume: {
    type: String,
    default: ''
  },
  github: {
    type: String,
    default: 'https://github.com'
  },
  linkedin: {
    type: String,
    default: 'https://linkedin.com'
  }
}, {
  timestamps: true
})

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema)

export default Profile
