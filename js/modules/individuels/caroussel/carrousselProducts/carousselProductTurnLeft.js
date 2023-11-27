function carousselProductTurnLeft(fleche_gauche_produit,compteur_produit,slides1_produit,transition) {
    fleche_gauche_produit.removeEventListener('click', carousselProductTurnLeft);
    compteur_produit--;
    slides1_produit.style.transition = transition + 'ms ease';
    if (compteur_produit < 0) {
       compteur_produit = slides1.length - 1;
       slides1_produit.style.transition = 'unset';
       setTimeout(carousselProductTurnLeft, 1);
    }
    setTimeout(() => {
       fleche_gauche_produit.addEventListener('click', carousselProductTurnLeft);
    }, transition);
    let transfert1 = -diaporama_produits_phares_width * compteur_produit;
    slides1_produit.style.transform = `translateX(${transfert1}px)`;
    return compteur_produit;
 };

 module.exports = carousselProductTurnLeft;