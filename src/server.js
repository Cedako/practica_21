// inyeccion de express, declaracion de app que funcionara de servidor e inclusion de ruta de persons
let express = require('express');
let app = express();
let personsRoute= require('./routes/persons');
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');
require("dotenv").config();
require('./database');



app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

// puerto predeterminado 3000
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('escuchando el puerto 3000');
})