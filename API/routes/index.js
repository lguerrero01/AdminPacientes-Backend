const express = require('express');
const router = express.Router();
const pacienteControllers = require('../controllers/pacientesControllers')

module.exports = function(){
 
    //agrega nuevos pacientes via post
    router.post('/pacientes',
        pacienteControllers.addPaciente
    );

    router.get('/pacientes',
         pacienteControllers.getPacientes
    );

    router.get('/pacientes/:id', pacienteControllers.getPacienteId);

    //actualizar pacientes por su id
    router.put('/pacientes/:id', pacienteControllers.updatePaciente);

       // Elimina un paciente por su ID
    router.delete('/pacientes/:id', pacienteControllers.eliminarPaciente);



    return router;//para que esten disponibles todas las diferentes rutas

}