const pageBody = document.querySelector('body')
const uploadInput = document.querySelector('#upload-file')

const uploadOverlay = document.querySelector(".img-upload__overlay")
const uploadPreview = uploadOverlay.querySelector('.img-upload__preview > img')
const uploadModalClose = uploadOverlay.querySelector('#upload-cancel')

uploadInput.addEventListener ('change', (evt) => {
    uploadPreview.src = URL.createObjectURL(uploadInput.files[0])
    uploadOverlay.classList.remove('hidden')
    pageBody.classList.add('modal-open')
    document.addEventListener('keydown', onUploadCancelKeydown)
})

const closeModal = () => {
    uploadPreview.src = 'img/upload-default-image.jpg'
    uploadOverlay.classList.add('hidden')
    pageBody.classList.remove('modal-open')
    uploadInput.value = '';
}

uploadModalClose.addEventListener('click', () => {
    closeModal();
})

const onUploadCancelKeydown = (evt) => {
    if (evt.code === "Escape") closeModal();
}
