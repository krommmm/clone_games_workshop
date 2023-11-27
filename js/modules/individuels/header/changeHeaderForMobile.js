function changeHeaderForMobile() {
    document
       .querySelector('.header_2_DM .header_2_DM_container i:first-child')
       .addEventListener('click', () => {
          var depliantDM = document.querySelector(
             '.header_2_DM_depliant .header_2_DM_depliant_container'
          );
          if (depliantDM.style.display != 'inline-block') {
             document.querySelector(
                '.header_2_DM_depliant .header_2_DM_depliant_container'
             ).style.display = 'inline-block';
          } else {
             document.querySelector(
                '.header_2_DM_depliant .header_2_DM_depliant_container'
             ).style.display = 'none';
          }
       });
 
    document
       .querySelector(
          '.header_2_DM .header_2_DM_container .header_2_DM_left .fa-magnifying-glass'
       )
       .addEventListener('click', () => {
          var depliantDMInput = document.querySelector('.input_container_2');
          if (depliantDMInput.style.display != 'inline-block') {
             depliantDMInput.style.display = 'inline-block';
          } else {
             depliantDMInput.style.display = 'none';
          }
       });
 };

 module.exports = changeHeaderForMobile;