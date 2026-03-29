import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['Frontend', 'Backend & APIs', 'Cloud & DevOps', 'Databases & Testing']
  },
  items: [{
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
  }]
}, {
  timestamps: true
})

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema)

export default Skill
