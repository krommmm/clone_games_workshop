function toggleFooterAssistanceContainer() {
    let assistanceContainers = document.querySelectorAll(
       '.assistance_container'
    );
    assistanceContainers.forEach((container) => {
       container.addEventListener('click', () => {
          let underContainer = container.closest('.assistance_container_parent')
             .children[1];
          underContainer.style.display !== 'none'
             ? (underContainer.style.display = 'none')
             : (underContainer.style.display = 'flex');
       });
    });
 };

 module.exports = toggleFooterAssistanceContainer;