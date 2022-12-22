const mongoose = require("mongoose");

/* Modelado de entidades (user)
    - declaracion de atributos de la tabla o entidad
    - exportacion de la entididad como model
*/
const UserSchema = mongoose.Schema({
    nombre:  {type: String, required:true, trim:true},
    email:   {type: String, required:true, trim:true, unique:true},
    password:{type:String, require:true, trim:true},
    registro: {type: Date, default: Date.now()},

});

//definir el modelo

module.exports = mongoose.model("User", UserSchema);