const mongoose = requiere('mongoose');
const Schema = mongoose.Schema;

const Cliente = new Schema({
    nombre: String,
    apellido: String,
    mesa: String
});

module.exports = mongoose.model('datos', Cliente)