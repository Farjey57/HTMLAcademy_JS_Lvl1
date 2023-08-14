import {show} from './big-picture.js'

const picturesList = document.querySelector('.pictures')
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture')

/**
 * Добавляем на страницу посты пользователей
 * @param {Array} data - Массив объектов, постов с фото
 */

const renderPhotos = (data) => {
  const picturesFragment = document.createDocumentFragment()
  data.forEach((item) => {
    picturesFragment.appendChild(renderPhoto(item)) 
  })
  picturesList.appendChild(picturesFragment)
}


/**
 * Создаем пост для отображения на главной странице
 * @param {Object} photo - информация о посте пользователя
 * @returns {Node} - пост пользователя для размещения на странице
 */

const renderPhoto = (photo) => {
  const pictureItem = picturesTemplate.cloneNode(true)

  pictureItem.querySelector('.picture__img').setAttribute('src', photo.url)
  pictureItem.querySelector('.picture__likes').textContent = photo.likes
  pictureItem.querySelector('.picture__comments').textContent = photo.comments.length
  //Добавляем слушатель на каждый пост для открытия полноэкранного просмотра
  pictureItem.addEventListener('click', (evt) => {
    evt.preventDefault();
    show(photo);
  })

  return pictureItem
}

export { renderPhotos }