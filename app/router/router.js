const express = require("express"); 

//on importe les controller
const mainController = require("../controllers/mainController"); 

//itinéraire modulaire
const router = express.Router(); 

//page d'acceuil 
router.get("/", mainController.homePage);

//page avec le catalogue 
router.get ("/catalogue", mainController.catalogue)

//page avec le produit 
router.get ("/produit/:id", mainController.produit)

//page avec informations (qui sommes-nous? )
router.get("/informations", mainController.informations)

// on exporte le router 
module.exports = router;
