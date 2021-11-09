const nav = document.querySelector('.header__nav');
const hamBtn = document.querySelector('#hamburger');
const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form')
const closeBtn = document.querySelector('.close-button');

hamBtn.onclick = () => {
    nav.classList.toggle('active');
    // nav.classList.toggle('fade-in');
    hamBtn.classList.toggle('fa-times');
}

window.onscroll = () => {
    hamburger.classList.remove('fa-times');
    nav.classList.remove('active');
}

searchIcon.onclick = () => {
    searchForm.classList.toggle('active');
}

closeBtn.onclick = () => {
    searchForm.classList.toggle('active');
}

