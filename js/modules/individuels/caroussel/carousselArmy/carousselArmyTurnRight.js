function carousselArmyTurnRight(compteur,fleche_droite,mosaique_ensemble_container,transition,mosaique_ensemble_width,slides) {
   compteur++;
   fleche_droite.removeEventListener('click', carousselArmyTurnRight);
   mosaique_ensemble_container.style.transition = transition + 'ms ease';
   let transfert = -mosaique_ensemble_width * compteur;
   mosaique_ensemble_container.style.transform = `translateX(${transfert}px)`;
   setTimeout(() => {
      if (compteur >= slides.length - 1) {
         compteur = 0;
         mosaique_ensemble_container.style.transition = 'unset';
         mosaique_ensemble_container.style.transform = `translateX(${0}px)`;
      }
      fleche_droite.addEventListener('click', carousselArmyTurnRight);
   }, transition);
   console.log(compteur);
   return compteur>=slides.length-1 ? 0 : compteur;
}

module.exports = carousselArmyTurnRight;
