import { setCookie } from "../../../utils/cookie";
import { redirect } from "../../../utils/helpers";
import { useService } from "../../../utils/useService";

const form = document.forms.signin
const overlay = document.querySelector('#loader-overlay');

const header = document.querySelector('header')
const footer = document.querySelector('footer')

header.classList.add('hidden')
footer.classList.add('hidden')

overlay.classList.add('hidden');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    overlay.classList.remove('hidden');

    const fn = new FormData(form);
    const user = {
        strategy: 'local'
    };

    fn.forEach((value, key) => {
        user[key] = value;
    });

    try {
        const res = await useService('authentication').post(user);
        setCookie('accessToken', res.data.accessToken, 1);

        if (res?.data?.accessToken) {
            localStorage.setItem('userName', res.data.user.fullName)
            
            redirect('/')
        } else {
            redirect('/')
        }
    } catch (error) {
        console.log(error);
        redirect('/')
    } finally {
        overlay.classList.add('hidden');
    }
});

