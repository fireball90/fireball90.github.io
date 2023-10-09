function mobileMenu() {

    const divElement = document.getElementById('mobile'); 

    if (window.innerWidth < 768) {
      divElement.classList.add('jumbotron'); 
    } else {
      divElement.classList.remove('jumbotron');
    }
  }
  
window.addEventListener('load', mobileMenu);
window.addEventListener('resize', mobileMenu);

