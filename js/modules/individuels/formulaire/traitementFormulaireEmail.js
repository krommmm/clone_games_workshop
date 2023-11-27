const traitementFormulaireEmail = (e) => {
   e.preventDefault();
   let testEmailName = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
   var email = e.target.form.email.value;
   if (!testEmailName.test(email)) {
      document.querySelector('.message_erreur_abonnement').style.display =
         'flex';
   } else {
      document.querySelector('.message_erreur_abonnement').style.display =
         'none';
      document.getElementById('inputEmail').value = '';
   }
};

module.exports = traitementFormulaireEmail;
