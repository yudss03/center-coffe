// TOGGLE NAVBAR ACTIVE

const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu')

hamburger.addEventListener('click', () => {
    navbarNav.classList.toggle('active')
})

// SIDEBAR CLOSE
document.addEventListener('click', (e) => {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

