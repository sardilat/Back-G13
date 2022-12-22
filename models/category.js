const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    nombre:  {type:String, required:true, trim:true},
    imagen:  {type:String, required:true, trim:true},
    creador: {type:mongoose.Schema.Types.ObjectId, ref:"User"},
    creado : {type:Date, default:Date.now()},
});

//definir el modelo
module.exports = mongoose.model("Category", CategorySchema);