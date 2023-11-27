function handleTransitionForCaroussel(diaporama_produits_phares,mosaique_ensemble_width,mosaique_ensemble) {
    //On définit la largeur de diaporama_produits_phares donc des slides1
    diaporama_produits_phares_width =
       diaporama_produits_phares.getBoundingClientRect().width;
 
    //On récupère la transition dans le html(!=css pour pouvoir l'unset en js et se déplacer instantanément sur une slide pour donner l'illusion qu'on tourne)
    transition = diaporama_produits_phares.dataset.transition;
 
    //On définit la largeur de mosaique_ensemble donc des slides
    mosaique_ensemble_width = mosaique_ensemble.getBoundingClientRect().width;
 
    //On récupère la transition dans le html(!=css pour pouvoir l'unset en js et se déplacer instantanément sur une slide pour donner l'illusion qu'on tourne)
    transition = mosaique_ensemble.dataset.transition;
    return transition;
 };

 module.exports = handleTransitionForCaroussel;