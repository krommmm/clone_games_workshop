const showOrHideCopyrightDetails = () => {
   document
      .querySelector('.copyright_container>p')
      .addEventListener('click', () => {
         let suite = document.querySelector('.copyright_container_suite');
         if (suite.style.display != 'flex') {
            suite.style.display = 'flex';
         } else {
            suite.style.display = 'none';
         }
      });
};

module.exports = showOrHideCopyrightDetails;
