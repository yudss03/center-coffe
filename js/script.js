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

// SEARCH CONTROL

const search = document.querySelector('#search')
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-box')

search.addEventListener('click', (e) => {
    searchForm.classList.toggle('active')
    searchBox.focus();
    e.preventDefault();
})

document.addEventListener('click', (e) => {
    if(!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
})

// SHOPPING CART ACTION
const cartBtn = document.querySelector('#shopping-cart')
const shoppingCart = document.querySelector('.shopping-cart')

cartBtn.addEventListener('click', (e) => {
    shoppingCart.classList.toggle('active')
    e.preventDefault();
})

document.addEventListener('click', (e) => {
    if(!cartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active')
    }
})

// MODAL BOX ACTION
const productEyeBtn = document.querySelectorAll('.products .product-card .detail-product')
const detailBox = document.querySelector('.modal-container')
const detailAll = document.querySelector('#modal-item-detail')
const closeBtn = document.querySelector('.modal .close-icon')

productEyeBtn.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        detailAll.style.display = 'flex'
        e.preventDefault()
    })
})

closeBtn.addEventListener('click', (e) => {
    detailAll.style.display = 'none'
    e.preventDefault();
})

detailAll.addEventListener('click', (e) => {
    if(!closeBtn.contains(e.target) && !detailBox.contains(e.target)) {
        detailAll.style.display = 'none'
    }
})
