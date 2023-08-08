import {show} from './big-picture.js'

const picturesList = document.querySelector(".pictures")
const picturesTemplate = document.querySelector("#picture").content.querySelector(".picture")


const renderPhotos = (data) => {
    const picturesFragment = document.createDocumentFragment()
    data.forEach((item) => {
        picturesFragment.appendChild(renderPhoto(item)) 
    })
    picturesList.appendChild(picturesFragment)
}

const renderPhoto = (photo) => {
    const pictureItem = picturesTemplate.cloneNode(true)

    pictureItem.querySelector(".picture__img").setAttribute("src", photo.url)
    pictureItem.querySelector(".picture__likes").textContent = photo.likes
    pictureItem.querySelector(".picture__comments").textContent = photo.comments.length

    pictureItem.addEventListener("click", (evt) => {
        evt.preventDefault();
        show(photo);
    })

    return pictureItem
}

export { renderPhotos }