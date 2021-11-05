const { Router } = require('express');
const express = require('express');
const router = express.Router();


const { Persona } = require("../models/persona");

// *** OPERACIONES CRUD
// *** CONSULTAR TODOS LOS REGISTROS*** 
router.get("/api/personas", (req, res) => {
    Persona.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

//  CREAR PERSONA
router.post('/api/personas/add', (req, res) => {
    const person = new Persona({
        IdP: req.body.IdP,
        TipoDocumentoP: req.body.TipoDocumentoP,
        DocumentoP: req.body.DocumentoP,
        NombresP: req.body.NombresP,
        ApellidosP: req.body.ApellidosP,
        DireccionP: req.body.DireccionP,
        CorreoElectronicoP: req.body.CorreoElectronicoP,
        TelefonoFijoP: req.body.TelefonoFijoP,
        TelefonoCelularP: req.body.TelefonoCelularP,
        EnlaceSitioWebP: req.body.EnlaceSitioWebP,
        DescripcionPerfilP: req.body.DescripcionPerfilP
    });
    person.save((err,data) => {
        res.status(200).json({ code:200, message:" *** PERSONA CREADA EN LA BASE DE DATOS ***",
        addPersona:data})
    });
});

// *** CONSULTAR UN REGISTRO*** 
router.get("/api/personas/:id", (req, res) => {
    Persona.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

//  ACTUALIZAR PERSONA
router.put('/api/personas/edit/:id', (req, res) => {
    const person = {
        IdP: req.body.IdP,
        TipoDocumentoP: req.body.TipoDocumentoP,
        DocumentoP: req.body.DocumentoP,
        NombresP: req.body.NombresP,
        ApellidosP: req.body.ApellidosP,
        DireccionP: req.body.DireccionP,
        CorreoElectronicoP: req.body.CorreoElectronicoP,
        TelefonoFijoP: req.body.TelefonoFijoP,
        TelefonoCelularP: req.body.TelefonoCelularP,
        EnlaceSitioWebP: req.body.EnlaceSitioWebP,
        DescripcionPerfilP: req.body.DescripcionPerfilP
    };
    Persona.findByIdAndUpdate(req.params.id, { $set:person }, { new:true}, (err,data) => {
        if(!err){
            res.status(200).json({ code:200, message:" *** INFORMACION PERSONA ACTUALIZADA ***",
            updatePersona:data})
        } else {
            console.log(err);
        }
    });
});

//  BORRAR PERSONA UTILIZANDO EL ID
router.delete('/api/personas/:id', (req, res) => {
    Persona.findByIdAndRemove(req.params.id, (err,data) => {
        if(!err){
            res.status(200).json({ code:200, message:" *** INFORMACION PERSONA BORRADA ***",
            deletePersona:data})
        } else {
            console.log(err);
        }
    });
});

//  BORRAR PERSONA UTILIZANDO IDP
/* router.delete('/api/personas/:IdP', (req, res) => {
    Persona.findByIdPAndRemove( req.params.IdP, (err,data) => {
        if(!err){
            res.status(200).json({ code:200, message:" *** INFORMACION PERSONA BORRADA ***",
            deletePersona:data})
        } else {
            console.log(err);
        }
    });
}); */


module.exports = router;
