const mongoose = require("mongoose");



// ESQUEMA DE PERSONA

const Persona = mongoose.model("Persona", {
    IdP: String,
    TipoDocumentoP: String,
    DocumentoP: String,
    NombresP: String,
    ApellidosP: String,
    DireccionP: String,
    CorreoElectronicoP: String,
    TelefonoFijoP: String,
    TelefonoCelularP: String,
    EnlaceSitioWebP: String,
    DescripcionPerfilP: String
});



module.exports = {Persona}