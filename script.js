// const lightMode = document.querySelector('.light-mode');
// const darkMode = document.querySelector('.dark-mode');
// const body = document.querySelector('body');

// darkMode.addEventListener('click', () => {
//     body.style.backgroundColor = '#121212';
// })

// lightMode.addEventListener('click', () => {
//     body.style.backgroundColor = "#fff"
// })


const body = document.querySelector('body');
const slider = document.querySelector('.slider')


toggle.addEventListener("click", () => {

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode')
    } else {
        body.classList.add('dark-mode')
    }
})

