module.exports = function errorHandler(err, req, res, next) {
  console.error(err)
  if (err.code) {
    switch (err.code) {
      case 11001: // En caso de Update
      case 11000: // En caso de Insert
        res.status(400).json({ message: `Hay al menos una propiedad duplicada`, info: err.message });
        break;

      default:
        res.status(500).json({ message: 'Unhandled error', info: err.message });
        break;
    }
  } else if (err.errors) {
    res.status(400).json({ message: `Las siguientes propiedades son requeridas: ${Object.keys(err.errors).join(', ')}`, info: err.message });
    return
  }
};
