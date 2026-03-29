import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  techStack: [{
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }],
  githubLink: {
    type: String,
    required: true
  },
  liveLink: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  period: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)

export default Project
