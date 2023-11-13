const hamburguer = document.querySelector('.mobileMenu')
const navMenu = document.querySelector('.nav-menu')

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active')
    navMenu.classList.toggle('active')
})
