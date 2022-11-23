const Usuario = require("../models/usuario.js");
const bcryptjs = require("bcryptjs")

exports.crearUsuario = async (req, res) => {
    //console.log(req.body);
    const { password } = req.body

    try{
        //crear un nuevo usuario
        let usuario = new Usuario(req.body);
        //hash
        usuario.password = await bcryptjs.hash(password, 10); //10 es la cantidad de rondas que hace para encriptar el password
        //Guardar usuario en la bd
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
    }catch(error){
        console.log(error);
    }
};

