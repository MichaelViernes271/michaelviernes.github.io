const navToggle = document.querySelector('.nav-toggle');
const darkMode = document.querySelector('.switch');
const navLinks = document.querySelectorAll('.nav__link');

// create a button for dark mode
darkMode.addEventListener('click', ()=> {
    document.body.classList.toggle('.dark-mode');
})

navToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach( link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});