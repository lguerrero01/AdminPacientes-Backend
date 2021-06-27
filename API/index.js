const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-Parser')
const routes = require('./routes');

//configurar servidor 
const app = express();

//conectar a mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//habilitar bodyParser pero como esta deprecado  usamos express, extrae la peticion que se envia al servidor
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//habilitar routing 
app.use('/', routes())

app.listen(4000, () => {
    console.log('servidor funcionando');
})
