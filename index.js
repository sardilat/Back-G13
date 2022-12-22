const express = require("express");
const conectarDB = require("./config/db");
const userRouters = require("./routers/userRouters");
const authRouters = require("./routers/authRouters");
const categoryRouters = require ("./routers/categoryRouters");
const productRouters = require ("./routers/productRouters");
const cors = require("cors");

//conectar a a la base de datos
conectarDB();

const app = express();
// habilitar los cors
app.use(cors());

//habilitar express.json
app.use(express.json({ extended: true }));

//rutas
app.use("/api/user", userRouters);
app.use("/api/auth", authRouters);
app.use("/api/category", categoryRouters);
app.use("/api/product",productRouters)

app.listen(4000, () => {
    console.log("SERVIDOR  CORRIENDO EN EL PUERTO 4000 ");
});