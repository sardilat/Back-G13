const mongoose = require("mongoose");

const conectarDB = async () => {
    try{
        const connection = await mongoose.connect(
            //"mongodb+srv://AsCrack:Tato@cluster0.10a2vet.mongodb.net/?retryWrites=true&w=majority", {
           "mongodb+srv://sardilat:killershield94@cluster0.viswkol.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,

           });
           const url = `${connection.connection.host}:${connection.connection.port}`;
           console.log(`MongoDB conectado en : ${url}`);
    }catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}
module.exports = conectarDB;