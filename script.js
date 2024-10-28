   const menuToggleCheckbox = document.getElementById("menu-toggle");
   const navLinks = document.querySelectorAll("nav a");

   navLinks.forEach((link) => {
     link.addEventListener("click", () => {
       menuToggleCheckbox.checked = false;
     });
   });
   
   window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const firstSection = document.querySelector('.hero'); 
  
    const sectionBottom = firstSection.getBoundingClientRect().bottom;
  
    if (sectionBottom <= 0) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
  
  