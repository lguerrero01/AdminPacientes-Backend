// cuando se crea un nuevo cliente
const Paciente = require("../models/Paciente");

exports.addPaciente = async (req, res, next) => {
  // Creando el objeto de paciente
  const paciente = new Paciente({ ...req.body });

  try {
    await paciente.save();
    res.json({
      message: "El cliente se agrego correctamente Papu",
    });
  } catch (error) {
    next(error);
  }
};

exports.getPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    next(error);
  }
};

exports.getPacienteId = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    next(error);
  }
};

exports.updatePaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(paciente);
  } catch (error) {
    next(error);
  }
};

// Eliminar paciente
exports.eliminarPaciente = async (req, res, next) => {
  try {
    await Paciente.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "El paciente fue eliminado" });
  } catch (error) {
    next(errors);
  }
};
