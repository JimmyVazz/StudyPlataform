const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  nombre: String,
  email: String,
  contraseña: String,
  categoria: {
    type: String,
    enum:['PROFESOR', 'ESTUDIANTE', 'AUTODIDACTA']
  },
  direccion: String,
  userImage: String
},{
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)