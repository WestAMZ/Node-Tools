const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Creación de instancia express
const app = express();

//Configuraciones de app express
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../app/views'));

//middleware 
app.use(bodyParser.urlencoded({extended:false}));

//exportación
module.exports = app;