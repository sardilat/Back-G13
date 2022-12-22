const jwt = require("jsonwebtoken");
const router = require("../routers/authRouters");

/* validacion  a traves de token 
        - lectura de token
        - verificacion de existencia de token
        - validar token
*/
module.exports = function (req, res, next) {
    //leer el token desde el header
    const token = req.header("x-auth-token");
    //console.log(token);

    //revisar si  el token existe o no
    if (!token) {
        return res.status(400).json({ msg: "No hay token" })
    }

    //validar token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.user = cifrado.user;
        // console.log(cifrado.user);
        next();
    } catch (error) {
        res.status(400).json({ msg: "Token no valido" })
    }
}