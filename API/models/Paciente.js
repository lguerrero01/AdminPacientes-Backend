const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true)

const pacientesSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
    required: true,
  },
  propietario: {
    type: String,
    trim: true,
  },
  fecha: {
    type: String,
    trim: true,
  },
  telefono: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  hora: {
    type: String,
    trim: true,
  },
  sintomas: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Paciente", pacientesSchema);
