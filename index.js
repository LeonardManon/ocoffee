// Importer les variables d'environnment 
require ('dotenv').config();
const express = require('express');
//const session = require ("express-session");

// on importe le router 
const router = require("./app/router/router");

// config
const PORT = process.env.PORT;
const app = express(); 
app.set("views","./app/views"); 
app.set("view engine", "ejs");

//fichier statiques
//app.use(express.static('./integration'));
app.use("/integration", express.static("integration"));

//routage
app.use(router);

//on lance le serveur 
app.listen(PORT,() => {
    console.log(`listenig on ${PORT}`);
});

// * GESTION 404 ET CENTRALISATION ERREUR
// ! à cette endroit on place une derniere route (la route de secours) -> 404
app.use((req, res, next) => {
  res.status(404).render("404");
});
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("404");
});