export function PostsComponent(item) {
    const post = document.createElement('div')
    const title = document.createElement('h1')
    const desc =  document.createElement('p')
    const image =  document.createElement('img')
    const comment = document.createElement('p')
    
    post.classList.add('post')
    post.dataset.id = item._id

    title.innerHTML =  item.title
    desc.innerHTML =  item.description
    image.src = item.img
    comment.innerHTML = item.content

    post.append(title, desc, image, comment)

    return post;
}