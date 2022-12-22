const User = require("../models/user")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

exports.authenticateUser = async (req, res) => {

    const { password, email } = req.body;
    try {

        //validar que el correo este registrado
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "El usuario no existe" });
        }

        //validar el password
        const passwordCorrect = await bcryptjs.compare(password, user.password);

        if (!passwordCorrect) {

            return res.status(404).json({ msg: "Password incorrecto" });
        }

        //si todo es correcto: crear y firmar token
        let payload = {
            user: { id: user.id },
        };
        //res.json(payload);
        jwt.sign(
            payload,
            process.env.SECRETA, {

            expiresIn: '30d',// 30 ias
        },
            (error, token) => {

                if (error) throw error;
                //mensaje de confirmacion
                res.json({ token });
            }
        );

       // console.log("Permitir ingresar");
    } catch (error) {

        console.log(error);
    }
}

exports.authUser = async (req, res) => {

    try {
        const user = await User.findById(req.user.id);
        res.json({ user });

    } catch (error) {
        res.status(403).json({ msg: "hubo un error" })
    }
}