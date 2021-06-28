// cuando se crea un nuevo cliente 
const Paciente = require('../models/Paciente')

exports.addPaciente = async ( req, res, next) => {
//creando el objeto de paciente con datos del req.body
const paciente = new Paciente({...req.body});

    try {
        console.log(paciente)
        await paciente.save();
        res.json({        
            mensaje: 'el cliente se agrego correctamentee'
         });
    } catch (error) {
        console.log(error)
        next();
    }

    
}


exports.getPacientes = async(req, res ,next) => {
    try {
        const pacientes = await Paciente.find({});      
        res.json(pacientes);

    } catch (error) {
        console.log(error)
        
    }
}

exports.getPacienteId = async(req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updatePaciente = async(req, res, next) => {

    try {
        const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Elimina un paciente por su id
exports.eliminarPaciente = async(req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}