const express = require("express");
const router = express.Router();
const pacienteControllers = require("../controllers/pacientesControllers");

module.exports = function () {
  // Agregar paciente
  router.post("/pacientes", pacienteControllers.addPaciente);

  // Obtener todos los pacientes
  router.get("/pacientes", pacienteControllers.getPacientes);

  // Obtener paciente
  router.get("/pacientes/:id", pacienteControllers.getPacienteId);

  // Actualizar paciente
  router.put("/pacientes/:id", pacienteControllers.updatePaciente);

  // Eliminar paciente
  router.delete("/pacientes/:id", pacienteControllers.eliminarPaciente);

  return router; // Para que esten disponibles todas las diferentes rutas
};
