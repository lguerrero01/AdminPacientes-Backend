// cuando se crea un nuevo cliente 

exports.addPaciente = ( req, res, next) => {
    res.json({        
            mensaje: 'el cliente se agrego correctamente'
    });
}

