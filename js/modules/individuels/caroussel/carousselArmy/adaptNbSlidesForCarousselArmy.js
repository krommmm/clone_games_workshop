function adaptNbSlidesForCarousselArmy(mosaique_ensemble_container) {
    //fonction qui rajoute ou enlève un clone de la première image selon la résolution
    slides = Array.from(mosaique_ensemble_container.children);
    var resolution_ecran = document
       .querySelector('body')
       .getBoundingClientRect().width;
    if (resolution_ecran < 951 && slides.length < 7) {
       var clone = mosaique_ensemble_container.firstElementChild.cloneNode(true);
       mosaique_ensemble_container.appendChild(clone);
       slides = Array.from(mosaique_ensemble_container.children);
    }
    if (resolution_ecran > 951 && slides.length > 6) {
       mosaique_ensemble_container.lastElementChild.remove();
       slides = Array.from(mosaique_ensemble_container.children);
    }
 };

 module.exports = adaptNbSlidesForCarousselArmy;