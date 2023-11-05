const hamburguer = document.querySelector(".mobileMenu");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})
const form =document.getElementById('form');
const campos =document.querySelectorAll('.required');
const spans =document.querySelectorAll('.span-required')
const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (event)=>{
 event.preventDefault();
    nameValidate();
    validarTelefone();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
});
