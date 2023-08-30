const MAX_HASHTAGS = 5;
const MAX_COMMENTLENGTH = 140;
const MAX_SYMBOLS = 20;

const fieldHashtags = document.querySelector('.text__hashtags')
const fieldComment = document.querySelector('.text__description')

fieldHashtags.addEventListener('input', (evt) => {
    console.log(evt)
})