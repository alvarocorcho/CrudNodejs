console.log ("HELLO WORLD BY NODEJS")

const express = require ("express");
const mongoose = require ('mongoose');
const UsuarioSchema = require("./models/Usuario.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//CONEXION A BASE DE DATOS//
mongoose.connect("mongodb+srv://alvarocorcho:P%40ncha119@clusterc4g6.5smth.mongodb.net/Crudnodejs?retryWrites=true&w=majority");

//OPERACIONES CRUD//
router.get("/", (req, res) => {
    res.send("*** INICIO DE LA API ***");
    })

    router.get("/usuario", (req, res) => {
        UsuarioSchema.find(function(err, datos){
            if(err){
                console.log("*** ERROR LEYENDO LOS USUARIOS REGISTRADOS ***");
            }else{
                res.send(datos);
            }
        })
    });

    router.post("/usuario", (req, res) => {
    let nuevoUsuario = new UsuarioSchema({
        IdUsuario: req.body.IdUsuario,
        TipoDocumentoUsuario: req.body.tipoDocumento,
        DocumentoUsuario: req.body.documento,
        NombresUsuario: req.body.nombres,
        ApellidosUsuario: req.body.apellidos,
        DireccionUsuario: req.body.direccion,
        CorreoElectronicoUsuario: req.body.correoElectronico,
        TelefonoFijoUsuario: req.body.telefonoFijo,
        TelefonoCelularUsuario: req.body.telefonoCelular,
        EnlaceSitioWeb: req.body.enlaceSitioWeb,
        DescripcionPerfilUsuario: req.body.descripcionPerfil
        });

        nuevoUsuario.save(function(err, datos){
            if(err){
                console.log(err);
            }
            res.send("*** USUARIO REGISTRADO CORRECTAMENTE! ***")
        })
    });

router.put("/usuario/edit/:IdUsuario", (req, res) => {
    usuarioUpdate = {
            IdUsuario: req.body.IdUsuario,
            TipoDocumentoUsuario: req.body.tipoDocumento,
            DocumentoUsuario: req.body.documento,
            NombresUsuario: req.body.nombres,
            ApellidosUsuario: req.body.apellidos,
            DireccionUsuario: req.body.direccion,
            CorreoElectronicoUsuario: req.body.correoElectronico,
            TelefonoFijoUsuario: req.body.telefonoFijo,
            TelefonoCelularUsuario: req.body.telefonoCelular,
            EnlaceSitioWeb: req.body.enlaceSitioWeb,
            DescripcionPerfilUsuario: req.body.descripcionPerfil
        };
        UsuarioSchema.findByIdUsuarioAndUpdate( req.params.IdUsuario, { $set:usuarioUpdate}, {new:true}, (err, data)=> {
            if(!err){
                res.status(200).json({ cide:200, message:"*** USUARIO ACTUALIZADO SATISFACTORIAMENTE ***",
            updateUsuario: data})
            } else {
                console.log(err);
            }
        } );
});    


app.use(router);
app.listen (3000,() => {
    console.log("*** SERVIDOR CORRIENDO EN EL PUERTO 3000 ***")
});

//usuario.update(function(err, datos){
//    if(err){
//        console.log(err);
//    }
//    res.send("*** USUARIO ACTUALIZADO CORRECTAMENTE! ***")
//})
//});