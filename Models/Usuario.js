const mongoose = require('mongoose');

let UsuarioSchema = new mongoose.Schema({
    IdUsuario: Number,
    TipoDocumentoUsuario: String,
    DocumentoUsuario: String,
    NombresUsuario: String,
    ApellidosUsuario: String,
    DireccionUsuario: String,
    CorreoElectronicoUsuario: String,
    TelefonoFijoUsuario: String,
    TelefonoCelularUsuario: String,
    EnlaceSitioWebUsuario: String,
    DescripcionPerfilUsuario: String,
    });

module.exports = mongoose.model("Usuario", UsuarioSchema, "Usuarios");