import { main } from "../../../components/MainComponent";
import { PostsComponent } from "../../../components/PostsComponent";
import { router } from "../../../router/router";
import { Render } from "../../../utils/render";

const posts =  document.querySelector('.post')
const overlay = document.querySelector('#loader-overlay');

async function main() {
    try {
        const { data: blogs } = await useService('blogs').find();

        Render(blogs.data, post, PostsComponent);

        posts.forEach(post => {
            post.addEventListener('click', () => {
                const id = post.dataset.id;
                history.pushState({}, '', `/blog/${id}`);
                router()
            });
        });
    } catch (e) {
        console.log('error');
    } finally {
        overlay.classList.add('hidden');
    }
}

main()