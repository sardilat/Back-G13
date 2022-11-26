const producto = require("../models/producto");

exports.leerProducto = async ( req, res ) => {
    res.json({msg : "ejecuto leer producto"});
}
exports.crearProducto = async ( req, res ) => {
    res.json({msg : "ejecuto crear producto"});
}
exports.actualizarProducto = async ( req, res ) => {
    res.json({msg : "ejecuto actualizar producto"});
}
exports.borrarProducto = async ( req, res ) => {
    res.json({msg : "ejecuto borrar producto"});
}