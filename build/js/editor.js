import {setDefaultOptions, effectRadioGroup, setFilter} from './effects.js'
import './validation.js'

const pageBody = document.querySelector('body')
const uploadInput = document.querySelector('#upload-file')

const uploadOverlay = document.querySelector('.img-upload__overlay')
const uploadPreview = uploadOverlay.querySelector('.img-upload__preview > img')
const uploadModalClose = uploadOverlay.querySelector('#upload-cancel')
const buttonsScale = document.querySelectorAll('.scale__control')
const scaleValue = document.querySelector('.scale__control--value')

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

uploadInput.addEventListener ('change', () => {
  uploadPreview.src = URL.createObjectURL(uploadInput.files[0])
  uploadOverlay.classList.remove('hidden')
  pageBody.classList.add('modal-open')
  document.addEventListener('keydown', onModalKeydown)
  uploadModalClose.addEventListener('click', onModalCloseClick)
  setDefaultOptions()
  for (let i = 0; i < effectRadioGroup.length; i++){
    effectRadioGroup[i].addEventListener('change', setFilter);
  }
})

const closeModal = () => {
  uploadPreview.src = 'img/upload-default-image.jpg'
  uploadOverlay.classList.add('hidden')
  pageBody.classList.remove('modal-open')
  uploadInput.value = '';
  document.removeEventListener('keydown', onModalKeydown)
  uploadModalClose.removeEventListener('click', onModalCloseClick)
  for (let i = 0; i < effectRadioGroup.length; i++) {
    effectRadioGroup[i].removeEventListener('change', setFilter);
  }
}

const onModalCloseClick = () => {
  closeModal();
};

const onModalKeydown = (evt) => {
  const calssActiveElement = document.activeElement.className
  if (calssActiveElement === 'text__hashtags' || calssActiveElement === 'text__description') {
    return
  } else if (evt.code === 'Escape' || evt.code === 'Esc') {
    closeModal();
  }
}

[...buttonsScale].map( (btn) => {
  btn.addEventListener('click', (evt) => {
    let scale = parseInt(scaleValue.value, 10)
    if (evt.target.className.includes('scale__control--smaller') && Scale.MIN < scale) {
      scale -= Scale.STEP
    } else if (evt.target.className.includes('scale__control--bigger') && Scale.MAX > scale) {
      scale += Scale.STEP
    }
    scaleValue.value = scale + '%'
    uploadPreview.style.transform = `scale(${scale/100})`
  })
})