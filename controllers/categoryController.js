const { json } = require("express");
const Category = require("../models/category");

// "req" es lo que podemos leer desde postman
// "res" es lo que enviamos hacia postman o hacia nuestro front


exports.readCategoryHome = async (req, res) => {

    // res.json({msg: "ejecuto leer categoria"});
    try {
        const category = await Category.find();
        res.json({ category });

    } catch (error) {
        console.log(error);
    }
}


exports.readCategory = async (req, res) => {

    // res.json({msg: "ejecuto leer categoria"});
    try {
        const category = await Category.find({ creador: req.user.id });
        res.json({ category });

    } catch (error) {
        console.log(error);
    }
}
/***************************************************** */

exports.readCategoryId = async (req, res) => {
    const{id}= req.params
    try {
        const category = await Category.findById(id);
        res.json({ category });

    } catch (error) {
        console.log(error);
    }
}



/******************************************************************************************* */
exports.createCategory = async (req, res) => {
    // res.json({msg: "ejecuto crear categoria"});
    try {
        const category = new Category(req.body);
        category.creador = req.user.id;
        category.save();
        res.json(category);

    } catch (error) {
        console.log(error);
    }
}

/************************************************************************************************** */
exports.updateCategory = async (req, res) => {
    //res.json({ msg: "ejecuto actualizar categoria" });

    const { id } = req.params;
    const category = await Category.findById(id);

    if(!category){
        return res.status(400).json({ msg: "Categoria no encontrada"});
    }

    if(category.creador.toString()!== req.user.id.toString()){
        return res.status(400).json({ msg: "Acción no valida para este usuario"});
    }

    category.nombre = req.body.nombre || category.nombre;
    category.imagen = req.body.imagen || category.imagen;
    category.save();
    res.json({category});
    
}
/********************************************************************************************** */
exports.deleteCategory = async (req, res) => {
    // res.json({ msg: "ejecuto borrar categoria" });

    try {
        await Category.deleteOne({ _id: req.params.id });
        res.json({ msg: "Categoria eliminada" })
    } catch (error) {
        console.log(error);
    }

}