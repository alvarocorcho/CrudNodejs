const express = require ('express');
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const dotenv = require("dotenv");

/* app.get("/", (req,res) => {
    res.send("*** THIS IS MY FIRST APP *** CRUD NODEJS");
});


app.get("/personas", (req,res) => {
    res.send("Personas");
}); */

const connectDB = require ("./config/db");

//** LLAMADO A CONFIGURACION */
dotenv.config({ path:"./config/config.env"});

connectDB();

// ROUTES
app.use("/", require("./routes/index"));

app.listen(3000);