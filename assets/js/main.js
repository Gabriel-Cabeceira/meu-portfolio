
const navegation_mobile = document.getElementById('navegation_mobile')

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

navegation_mobile.addEventListener("click", toggleMenu)