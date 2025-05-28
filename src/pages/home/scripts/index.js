import { BlogComponent } from "../../../components/BlogComponent";
import { main } from "../../../components/MainComponent";

const allBlogs = document.querySelector('.allBlog')
const overlay = document.querySelector('#loader-overlay');

main(allBlogs, BlogComponent, overlay);

const blog = document.querySelector('.gridElem')

console.log(blog);