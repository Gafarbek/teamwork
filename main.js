import { router } from "./src/router/router";
import { getCookie } from "./src/utils/cookie";


const link = document.getElementById('account')
const token = getCookie('accessToken')


if (!token) {
    link.href = '/signup'
} else {
    link.href = '/account'
}

const closeBtn = document.querySelector('.closeBtn')
const burgerBtn = document.getElementById('burgerBtn');
const modal = document.getElementById('modal');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    modal.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    burgerBtn.classList.remove('active');
});
router();