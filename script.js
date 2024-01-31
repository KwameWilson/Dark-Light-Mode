const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const body = document.querySelector('body');

darkMode.addEventListener('click', () => {
    body.style.backgroundColor = '#121212';
})

lightMode.addEventListener('click', () => {
    body.style.backgroundColor = "#fff"
})