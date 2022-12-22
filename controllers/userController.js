const User = require("../models/user")
const bcryptjs = require("bcryptjs");

/* Controlador  para el rol  de usuario 
        -Crear usuario
            -validaciones
            -hash para password
            -guardar usuario en la Base de datos
*/
exports.createUser = async (req, res) => {
    //console.log(req.body)
    //res.json({ msg: "desde controller post" })
    const { password, email } = req.body;

    try {
        //validad que el correo sea unico
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: "El usuario ya existe" });
        }

        //crear un nuevo usuario
        user = new User(req.body);

        //hash
        user.password = await bcryptjs.hash(password, 10);

        // Guardas usuario en la bd
        const userSave = await user.save();
        res.json(userSave);

    } catch (error) {
        console.log(error);
    }
};