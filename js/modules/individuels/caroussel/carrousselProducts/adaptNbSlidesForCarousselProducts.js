function adaptNbSlidesForCarousselProducts() {
    slides1 = Array.from(slides1_produit.children);
    var resolution_ecran = document
       .querySelector('body')
       .getBoundingClientRect().width;
    if (resolution_ecran < 951 && slides1.length < 10) {
       var clone = slides1_produit.firstElementChild.cloneNode(true);
       slides1_produit.appendChild(clone);
       slides1 = Array.from(slides1_produit.children);
    }
    if (resolution_ecran > 951 && slides1.length > 9) {
       slides1_produit.lastElementChild.remove();
       slides1 = Array.from(slides1_produit.children);
    }
 };

 module.exports = adaptNbSlidesForCarousselProducts;