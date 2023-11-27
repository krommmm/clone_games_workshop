function carousselArmyTurnLeft(fleche_gauche,compteur,mosaique_ensemble_container,transition,mosaique_ensemble_width,slides) {
    fleche_gauche.removeEventListener('click', carousselArmyTurnLeft);
    compteur--;
    mosaique_ensemble_container.style.transition = transition + 'ms ease';
    if (compteur < 0) {
       compteur = slides.length - 1;
       mosaique_ensemble_container.style.transition = 'unset';
       setTimeout(carousselArmyTurnLeft, 1);
    }
    setTimeout(() => {
       fleche_gauche.addEventListener('click', carousselArmyTurnLeft);
    }, transition);
    let transfert = -mosaique_ensemble_width * compteur;
    mosaique_ensemble_container.style.transform = `translateX(${transfert}px)`;
    return compteur;
 };

 module.exports = carousselArmyTurnLeft;