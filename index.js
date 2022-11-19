const express = require("express");
const conectarDB = require("./config/db");

//conectar a la base de datos
conectarDB();

const app = express();

app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000");
});