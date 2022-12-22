const { json } = require("express");
const Product = require("../models/product");



exports.readProductHome = async (req, res) => {

    // res.json({msg: "ejecuto leer categoria"});
    try {
        const product1 = await Product.find();
        res.json({ product1 });

    } catch (error) {
        console.log(error);
    }
}



exports.readProduct = async (req, res) => {
    //res.json({ msg: "ejecuto leer Producto" });

    const {id }= req.params;
    const producto= await Product.find().where("categoriaId").equals(id);
    res.json({producto});

}


exports.readProductId = async (req, res) => {
    const{id}= req.params
    try {
        const product = await Product.findById(id);
        res.json({ product});

    } catch (error) {
        console.log(error);
    }
}

/********************************************************************************************/

exports.createProduct = async (req, res) => {
    //   res.json({ msg: "ejecuto crear Producto" });
   /* const {categoriaId}= req.body;
    console.log(categoriaId);
    try {
        const categoryencontrada = await category.findById(categoriaId);
        if(!categoryencontrada){
            return res.status (404).json({msg: "categoria no encontrada"});
        }
        const product = new Product(req.body)
        //product.categoryId = req.category.id;
        product.save();
        res.json(product);

    } catch (error) {
        console.log(error);
    }*/
try {   
    const producto = new Product(req.body);
    producto.save();
    producto.creador = req.user.id;
    res.json(producto);

} catch (error) {
    console.log(error);
}


}
/********************************************************************************************/
exports.updateProduct = async (req, res) => {
    //res.json({ msg: "ejecuto actualizar Producto" });

    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
        return res.status(400).json({ msg: "Producto no encontrado" });
    }

    /* if(product.  category.creador.toString()!== req.user.id.toString()){
         return res.status(400).json({ msg: "Acción no valida para este usuario"});
     }*/

    //category.nombre = req.body.nombre || category.nombre;
    product.nombre = req.body.nombre || product.nombre;
    product.descripcion = req.body.descripcion || product.descripcion;
    product.stock = req.body.stock || product.stock;
    product.precio = req.body.precio || product.precio;
    product.imagen = req.body.imagen || product.imagen;
    product.save();
    res.json({ product });
}

/********************************************************************************************/

exports.deleteProduct = async (req, res) => {
    // res.json({ msg: "ejecuto borrar Producto" });

    try {
        await Product.deleteOne({ _id: req.params.id });
        res.json({ msg: "Producto eliminado" })
    } catch (error) {
        console.log(error);
    }
}