const dataMapper = require("../dataMapper");

const mainController = {
  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    try {
      const accueil = await dataMapper.catalogue();
      res.render("accueil", { accueil });
    } catch (error) {
      res.status(500).send(`Erreur: ${error}`);
      throw error;
    }
  },
  //méthode pour la page catalogue
  catalogue: async (req, res) => {
    try {
      const catalogue = await dataMapper.catalogue();
      res.render("catalogue", { catalogue });
    } catch (error) {
      res.status(500).send(`Erreur: ${error}`);
      throw error;
    }
  },
 //méthode pour la page produit
  produit: async (req, res) => {
    try {
      const produit = await dataMapper.produit(req.params.id);
      res.render("produit", { produit });
    } catch (error) {
      res.status(500).send(`Erreur: ${error}`);
      throw error;
    }
  },

  //méthode pour la page informations
  informations: (req, res) => {
    res.render("informations");
  },
};

module.exports = mainController
