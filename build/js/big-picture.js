const modal = document.querySelector(".big-picture")
const commentTemplate = document.querySelector("#comment").textContent.querySelector(".social__comment")


const show = (picture) => {
    modal.querySelector(".big-picture__img > img").setAttribute("src", picture.url)
    modal.querySelector(".likes-count").textContent = picture.likes
    modal.querySelector(".social__caption").textContent = picture.description
    modal.querySelector(".comments-count").textContent = picture.comments.length
    renderComments(picture.comments.slice())
    modal.classList.remove('hidden')
}

const renderComments = (comments) => {
    const commentsListFragment =
    commentTemplate
}

export {show}