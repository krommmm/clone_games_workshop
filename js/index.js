//Variables globales
var mosaique_ensemble = document.querySelector('.mosaique_ensemble');
var mosaique_ensemble_container = document.querySelector(
   '.mosaique_ensemble_container'
);
var fleche_gauche = document.querySelector('#fleche_gauche');
var fleche_droite = document.querySelector('#fleche_droite');
var compteur = 0;
var slides, mosaique_ensemble_width, transfert;
var diaporama_produits_phares = document.querySelector(
   '.diaporama_produits_phares'
);
var slides1_produit = document.querySelector('.slides1_produit');
var fleche_gauche_produit = document.querySelector('#fleche_gauche_produit');
var fleche_droite_produit = document.querySelector('#fleche_droite_produit');
var compteur_produit = 0;
var slides1, diaporama_produits_phares_width, transfert1;
let boutonErreur = document.getElementById('bouton_erreur');

//Importations
const hideOrShowBgLangMenu = require('./modules/individuels/header/hideOrShowBgLangMenu');
const traitementFormulaireEmail = require('./modules/individuels/formulaire/traitementFormulaireEmail');
const showOrHideCopyrightDetails = require('./modules/individuels/copyright/showOrHideCopyrightDetails');
const updateCopyrightYear = require('./modules/individuels/copyright/updateCopyrightYear');
const changeHeaderForMobile = require('./modules/individuels/header/changeHeaderForMobile');
const toggleFooterAssistanceContainer = require('./modules/individuels/footer/toggleFooterAssistanceContainer');
const carousselArmyTurnRight = require("./modules/individuels/caroussel/carousselArmy/carousselArmyTurnRight");
const carousselProductTurnRight = require('./modules/individuels/caroussel/carrousselProducts/carousselProductTurnRight');
const carousselArmyTurnLeft = require("./modules/individuels/caroussel/carousselArmy/carousselArmyTurnLeft");
const carousselProductTurnRight = require("./modules/individuels/caroussel/carrousselProducts/carousselProductTurnRight");
const carousselProductTurnLeft = require("./modules/individuels/caroussel/carrousselProducts/carousselProductTurnLeft");
const handleTransitionForCaroussel = require("./modules/individuels/caroussel/handleTransitionForCaroussel");
const adaptNbSlidesForCarousselArmy = require("./modules/individuels/caroussel/carousselArmy/adaptNbSlidesForCarousselArmy");
const adaptNbSlidesForCarousselProducts = require("./modules/individuels/caroussel/carrousselProducts/adaptNbSlidesForCarousselProducts");

//Code
hideOrShowBgLangMenu();
showOrHideCopyrightDetails();
updateCopyrightYear();
changeHeaderForMobile();
transition = handleTransitionForCaroussel(diaporama_produits_phares,mosaique_ensemble_width,mosaique_ensemble);
adaptNbSlidesForCarousselArmy(mosaique_ensemble_container);
adaptNbSlidesForCarousselProducts();

window.onresize = () => {
   window.location.reload();
};

fleche_gauche.addEventListener('click', ()=>{
   compteur = carousselArmyTurnLeft();
});
fleche_droite.addEventListener('click', ()=>{
  compteur = carousselArmyTurnRight(compteur,fleche_droite,mosaique_ensemble_container,transition,mosaique_ensemble_width,slides);
});

fleche_gauche_produit.addEventListener('click', ()=>{
   compteur_produit = carousselProductTurnLeft(fleche_gauche_produit,compteur_produit,slides1_produit,transition);
});
fleche_droite_produit.addEventListener('click', ()=>{
   compteur_produit = carousselProductTurnRight(fleche_droite_produit,compteur_produit,slides1_produit,transition,diaporama_produits_phares_width,slides1_produit);
});

toggleFooterAssistanceContainer();

boutonErreur.addEventListener('click', (e) => {
   traitementFormulaireEmail(e);
});
