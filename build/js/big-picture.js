import { getRandomBetween, setAttributes } from './utils.js'

const pageBody = document.querySelector('body')
const bigPictureModalClose = document.querySelector('#picture-cancel')
const modal = document.querySelector('.big-picture')
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment')
const commentList = modal.querySelector('.social__comments')
const commentCount = modal.querySelector('.social__comment-count')
const commentLoader = modal.querySelector('.comments-loader')



const show = (picture) => {
  modal.querySelector('.big-picture__img > img').setAttribute('src', picture.url)
  modal.querySelector('.likes-count').textContent = picture.likes
  modal.querySelector('.social__caption').textContent = picture.description
  modal.querySelector('.comments-count').textContent = picture.comments.length
  try {
    renderComments(picture.comments.slice())
  } catch (err) {
    let plugCommetns = Object.assign(document.createElement('li'), {className: 'social__comment', textContent: 'Комментарии отсутствуют'})
    commentList.appendChild(plugCommetns)
  }
  commentCount.classList.add('visually-hidden')
  commentLoader.classList.add('visually-hidden')

  document.addEventListener('keydown', onModalKeydown)
  pageBody.classList.add('modal-open')
  bigPictureModalClose.addEventListener('click', onModalCloseClick)

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

  setAttributes(commentItem.querySelector('.social__picture'), {'src': `img/avatar-${getRandomBetween(1,6)}.svg`,
    'alt': 'Аватар комментатора фотографии',
    'width': 35,
    'height': 35,
  })
  commentItem.querySelector('.social__text').textContent = comment

  return commentItem
}

const closeModal = () => {
  modal.classList.add('hidden')
  document.removeEventListener('keydown', onModalKeydown)
  bigPictureModalClose.removeEventListener('click', onModalCloseClick)
  pageBody.classList.remove('modal-open')
  commentList.replaceChildren()
}

const onModalCloseClick = () => {
  closeModal();
}

const onModalKeydown = (evt) => {
  evt.preventDefault();
  if (evt.code === ('Escape' || 'Esc')) closeModal();
}

export {show}