import { getRandomBetween, setAttributes } from './utils.js'

const modal = document.querySelector(".big-picture")
const commentTemplate = document.querySelector("#comment").content.querySelector(".social__comment")
const commentList = modal.querySelector(".social__comments")
const commentCount = modal.querySelector(".social__comment-count")
const commentLoader = modal.querySelector(".comments-loader")


const show = (picture) => {
    modal.querySelector(".big-picture__img > img").setAttribute("src", picture.url)
    modal.querySelector(".likes-count").textContent = picture.likes
    modal.querySelector(".social__caption").textContent = picture.description
    modal.querySelector(".comments-count").textContent = picture.comments.length
    renderComments(picture.comments.slice())
    /*try {
        renderComments(picture.comments.slice())
    } catch (err) {
        let plugCommetns = Object.assign(document.createElement('li'), {className: "social__comment", textContent: "Комментарии отсутствуют"})
        commentList.appendChild(plugCommetns)
    }*/
    commentCount.classList.add('visually-hidden')
    commentLoader.classList.add('visually-hidden')
    modal.classList.remove('hidden')
}

const renderComments = (comments) => {
    const commentsListFragment = document.createDocumentFragment()

    comments.forEach((comment) => {
        commentsListFragment.appendChild(renderComment(comment)) 
    })
    commentList.appendChild(commentsListFragment)
}

const renderComment = (comment) => {
    const commentItem = commentTemplate.cloneNode(true)

    setAttributes(commentItem.querySelector('.social__picture'), {"src": `img/avatar-${getRandomBetween(1,6)}.svg`,
    "alt": "Аватар комментатора фотографии",
    "width": 35,
    "height": 35,
    })
    commentItem.querySelector('.social__text').textContent = comment

    return commentItem
}

export {show}