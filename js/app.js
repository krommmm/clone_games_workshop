//masque filter pour le choix de la langue
document
   .querySelector('.lang_container')
   .addEventListener('click', fDisplayLang);

function fDisplayLang() {
   document.querySelector('.console_choix_lang').style.display = 'flex';
   document.querySelector('.filter').style.backgroundColor =
      'rgba(0, 0, 0, .5)';
   document.querySelector('.filter').style.display = 'flex';
}

document.querySelector('.croix_lang').addEventListener('click', fUndisplay);

function fUndisplay() {
   document.querySelector('.console_choix_lang').style.display = 'none';
   document.querySelector('.filter').style.display = 'none';
   document.querySelector('.filter').style.backgroundColor = 'rgba(0,0,0,0)';
}

//newsletter evenement

document.querySelector('.droite .button').addEventListener('click', fDisplayOn);

function fDisplayOn() {
   document.querySelector('.gauche .message_erreur_abonnement').style.display =
      'flex';
}

//footer evenement

document
   .querySelector('.copyright_container>p')
   .addEventListener('click', fDisplayFooterSuite);

function fDisplayFooterSuite() {
   var suite = document.querySelector('.copyright_container_suite');

   if (suite.style.display != 'flex') {
      suite.style.display = 'flex';
   } else {
      suite.style.display = 'none';
   }
}

//header_2_DM
//DEPLIANT

document
   .querySelector('.header_2_DM .header_2_DM_container i:first-child')
   .addEventListener('click', fDepliantMenu);

function fDepliantMenu() {
   var depliantDM = document.querySelector(
      '.header_2_DM_depliant .header_2_DM_depliant_container'
   );
   if (depliantDM.style.display != 'inline-block') {
      document.querySelector(
         '.header_2_DM_depliant .header_2_DM_depliant_container'
      ).style.display = 'inline-block';
   } else {
      document.querySelector(
         '.header_2_DM_depliant .header_2_DM_depliant_container'
      ).style.display = 'none';
   }
}

document
   .querySelector(
      '.header_2_DM .header_2_DM_container .header_2_DM_left .fa-magnifying-glass'
   )
   .addEventListener('click', fDepliantInput);

function fDepliantInput() {
   var depliantDMInput = document.querySelector('.input_container_2');
   if (depliantDMInput.style.display != 'inline-block') {
      depliantDMInput.style.display = 'inline-block';
   } else {
      depliantDMInput.style.display = 'none';
   }
}

//#######################
//## Mosaique ensemble ##
//#######################
// But : On veut créer un diaporama en caroussel en clonant la première image et en s'en servant pour donner l'illusion de transitions

//On déclare les variables globales
var mosaique_ensemble = document.querySelector('.mosaique_ensemble');
var mosaique_ensemble_container = document.querySelector(
   '.mosaique_ensemble_container'
);
var fleche_gauche = document.querySelector('#fleche_gauche');
var fleche_droite = document.querySelector('#fleche_droite');
var compteur = 0;
var slides, mosaique_ensemble_width, transfert;


//On déclare les variables globales
var diaporama_produits_phares = document.querySelector('.diaporama_produits_phares');
var slides1_produit = document.querySelector(
   '.slides1_produit'
);
var fleche_gauche_produit = document.querySelector('#fleche_gauche_produit');
var fleche_droite_produit = document.querySelector('#fleche_droite_produit');
var compteur_produit = 0;
var slides1, diaporama_produits_phares_width, transfert1;

//On définit la largeur de diaporama_produits_phares donc des slides1
diaporama_produits_phares_width = diaporama_produits_phares.getBoundingClientRect().width;

//On récupère la transition dans le html(!=css pour pouvoir l'unset en js et se déplacer instantanément sur une slide pour donner l'illusion qu'on tourne)
transition = diaporama_produits_phares.dataset.transition;


//On définit la largeur de mosaique_ensemble donc des slides
mosaique_ensemble_width = mosaique_ensemble.getBoundingClientRect().width;

//On récupère la transition dans le html(!=css pour pouvoir l'unset en js et se déplacer instantanément sur une slide pour donner l'illusion qu'on tourne)
transition = mosaique_ensemble.dataset.transition;

//----fonction pour onresize et onload------

//On lance la fonction au changement de résolution et au chargement de la page
window.onresize = () => {
   ChangeNumberSlides();
   ChangeNumberslides1();

};
window.onload = () => {
   ChangeNumberSlides();
   ChangeNumberslides1();
  
};


//fonction qui rajoute ou enlève un clone de la première image selon la résolution
function ChangeNumberSlides() {
   slides = Array.from(mosaique_ensemble_container.children);
   var resolution_ecran = document
      .querySelector('body')
      .getBoundingClientRect().width;
   if (resolution_ecran < 951 && slides.length < 7) {
      var clone = mosaique_ensemble_container.firstElementChild.cloneNode(true);
      mosaique_ensemble_container.appendChild(clone);
      slides = Array.from(mosaique_ensemble_container.children);
      //console.log(slides);
   }
   if (resolution_ecran > 951 && slides.length > 6) {
      mosaique_ensemble_container.lastElementChild.remove();
      slides = Array.from(mosaique_ensemble_container.children);
      //console.log(slides);
   }
}

//----fonction pour onresize et onload------
//fonction qui rajoute ou enlève un clone de la première image selon la résolution
function ChangeNumberslides1() {
   slides1 = Array.from(slides1_produit.children);
   var resolution_ecran = document
      .querySelector('body')
      .getBoundingClientRect().width;
   if (resolution_ecran < 951 && slides1.length < 10) {
      var clone = slides1_produit.firstElementChild.cloneNode(true);
      slides1_produit.appendChild(clone);
      slides1 = Array.from(slides1_produit.children);
      console.log(slides1);
   }
   if (resolution_ecran > 951 && slides1.length > 9) {
      slides1_produit.lastElementChild.remove();
      slides1 = Array.from(slides1_produit.children);
      console.log(slides1);
   }
}

//On gère le clic
fleche_gauche.addEventListener('click', goLeft);
fleche_droite.addEventListener('click', goRight);


//On gère le clic
fleche_gauche_produit.addEventListener('click', goLeft_produit);
fleche_droite_produit.addEventListener('click', goRight_produit);

//Cette fonction permet de tourner à droite
function goRight() {
   compteur++;
   fleche_droite.removeEventListener('click', goRight);
   mosaique_ensemble_container.style.transition = transition + 'ms ease';
   let transfert = -mosaique_ensemble_width * compteur;
   mosaique_ensemble_container.style.transform = `translateX(${transfert}px)`;
   setTimeout(() => {
      if (compteur >= slides.length - 1) {
         compteur = 0; 
         mosaique_ensemble_container.style.transition = 'unset';
         mosaique_ensemble_container.style.transform = `translateX(${0}px)`;
      }
      fleche_droite.addEventListener('click', goRight);
   }, transition);
}

//Cette fonction permet de tourner à gauche
function goLeft() {
   fleche_gauche.removeEventListener('click', goLeft);
   compteur--;
   mosaique_ensemble_container.style.transition = transition + 'ms ease';
   if (compteur < 0) {
      compteur = slides.length - 1;
      mosaique_ensemble_container.style.transition = 'unset';
      setTimeout(goLeft, 1);
   }
   setTimeout(()=>{
      fleche_gauche.addEventListener('click', goLeft);
   },transition)
   let transfert = -mosaique_ensemble_width * compteur;
   mosaique_ensemble_container.style.transform = `translateX(${transfert}px)`;
}

//Cette fonction permet de tourner à droite
function goRight_produit() {
   fleche_droite_produit.removeEventListener('click', goRight_produit);
   compteur_produit++;
   slides1_produit.style.transition = transition + 'ms ease';
   let transfert1 = -diaporama_produits_phares_width * compteur_produit;
   slides1_produit.style.transform = `translateX(${transfert1}px)`;
   setTimeout(() => {
      if (compteur_produit >= slides1.length - 1) {
         compteur_produit = 0; 
         slides1_produit.style.transition = 'unset';
         slides1_produit.style.transform = `translateX(${0}px)`;
      }
      fleche_droite_produit.addEventListener('click', goRight_produit);
   }, transition);
}

//Cette fonction permet de tourner à gauche
function goLeft_produit() {
   fleche_gauche_produit.removeEventListener('click', goLeft_produit);
   compteur_produit--;
   slides1_produit.style.transition = transition + 'ms ease';
   if (compteur_produit < 0) {
      compteur_produit = slides1.length - 1;
      slides1_produit.style.transition = 'unset';
      setTimeout(goLeft_produit, 1);
   }
   setTimeout(()=>{
      fleche_gauche_produit.addEventListener('click', goLeft_produit);
   },transition)
   let transfert1 = -diaporama_produits_phares_width * compteur_produit;
   slides1_produit.style.transform = `translateX(${transfert1}px)`;
}


// ###### Footer ######

//But: Quand on clique sur le li où se situe le titre, le sous display correspondant devient visible




//1
document.querySelector(".ok1").addEventListener("click", display1);
function display1(){
  
   if(document.querySelector("#sous_ok_1").style.display!="flex"){
      document.querySelector("#sous_ok_1").style.display="flex";
      document.querySelector("")
   }else{
      document.querySelector("#sous_ok_1").style.display="none";
   }
}

//2
document.querySelector(".ok2").addEventListener("click", display2);
function display2(){

   if(document.querySelector("#sous_ok_2").style.display!="flex"){
      document.querySelector("#sous_ok_2").style.display="flex";
   }else{
      document.querySelector("#sous_ok_2").style.display="none";
   }
}

//3
document.querySelector(".ok3").addEventListener("click", display3);
function display3(){

   if(document.querySelector("#sous_ok_3").style.display!="flex"){
      document.querySelector("#sous_ok_3").style.display="flex";
   }else{
      document.querySelector("#sous_ok_3").style.display="none";
   }
}

//4
document.querySelector(".ok4").addEventListener("click", display4);
function display4(){
   if(document.querySelector("#sous_ok_4").style.display!="flex"){
      document.querySelector("#sous_ok_4").style.display="flex";
   }else{
      document.querySelector("#sous_ok_4").style.display="none";
   }
}




    


