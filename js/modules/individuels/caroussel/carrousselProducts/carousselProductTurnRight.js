function carousselProductTurnRight(fleche_droite_produit,compteur_produit,slides1_produit,transition,diaporama_produits_phares_width,slides1_produit) {
    fleche_droite_produit.removeEventListener(
       'click',
       carousselProductTurnRight
    );
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
       fleche_droite_produit.addEventListener(
          'click',
          carousselProductTurnRight
       );
    }, transition);
    return compteur_produit>=slides1.length-1 ? 0 : compteur_produit;
 };

 module.exports = carousselProductTurnRight;