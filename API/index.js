const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-Parser')
const routes = require('./routes');
const errorHandler = require('./helpers/errorHandler')
const cors = require('cors');
const PORT = 4000;
//configurar servidor 
const app = express();

//conectar a mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(cors());

//habilitar bodyParser pero como esta deprecado  usamos express, extrae la peticion que se envia al servidor
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//habilitar routing 
app.use('/', routes())

// Error Handler
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('El servidor dejo de funcionar, igual que tu vida: ', PORT);
})
