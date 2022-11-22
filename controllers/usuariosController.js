const Usuario = require("../models/usuario.js");

exports.crearUsuario = async (req, res) => {
    console.log(req.body);
    res.json({msg: "desde controller post"})
};

