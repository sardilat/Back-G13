const mongoose = require("mongoose");
// Conectar a la base de datos atraves de MongoDB con la extension de mongoose
const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://sardilat:killershield94@cluster0.viswkol.mongodb.net/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        );
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conectado en : ${url}`);
    } catch (error) {
        console.log(`error ${error.message}`);
        process.exit(1);
    }
}
module.exports = conectarDB;