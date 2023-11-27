const hideOrShowBigLangMenu = () => {
   document.querySelector('.lang_container').addEventListener('click', () => {
      document.querySelector('.console_choix_lang').style.display = 'flex';
      document.querySelector('.filter').style.backgroundColor =
         'rgba(0, 0, 0, .5)';
      document.querySelector('.filter').style.display = 'flex';
   });
   document.querySelector('.croix_lang').addEventListener('click', () => {
      document.querySelector('.console_choix_lang').style.display = 'none';
      document.querySelector('.filter').style.display = 'none';
      document.querySelector('.filter').style.backgroundColor = 'rgba(0,0,0,0)';
   });
};

module.exports = hideOrShowBigLangMenu;
