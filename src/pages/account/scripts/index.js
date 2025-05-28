const overlay = document.querySelector('#loader-overlay');
overlay.classList.add('hidden')


const border = document.querySelector('header')
border.style.borderBottom = 'none'

const infoH1 = document.querySelector('.info h1')
const userH3 = document.querySelector('.user h3')
const userName = localStorage.getItem('userName')

if (userName) {
    const Blog = document.querySelector('.headerChild h2')
    infoH1.textContent = userName
    userH3.textContent = userName
    Blog.textContent = userName
}
