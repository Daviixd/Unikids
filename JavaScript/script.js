const menu = document.querySelector('.mobileMenu')
const navMenu = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
})
