const express = require('express');
const router = express.Router();
const pacienteControllers = require('../controllers/pacientesControllers')

module.exports = function(){
 
    //agrega nuevos pacientes via post
    router.post('/pacientes',
        pacienteControllers.addPaciente
     );
    return router;//para que esten disponibles todas las diferentes rutas
}