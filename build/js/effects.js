/* global noUiSlider:readonly */

const rangeNoUiSlider = document.querySelector('.effect-level__slider')
const effectLevelSlider = document.querySelector('.effect-level__value')
const uploadPreview = document.querySelector('.img-upload__preview > img')
const effectRadioGroup = document.getElementsByName('effect')

noUiSlider.create(rangeNoUiSlider, {
  start: 100,
  connect: 'lower',
  step: 1,
  range: {
    'min': 0,
    'max': 100,
  },
});

rangeNoUiSlider.noUiSlider.on('update', (_, handle, unencoded) => {
  effectLevelSlider.value = unencoded[handle];
})

console.log(effectRadioGroup)
function setColor(event) {
  console.log(event.target.value)
  uploadPreview.className = `effects__preview--${event.target.value}`;
}
for (let i = 0; i < effectRadioGroup.length; i++)
  effectRadioGroup[i].addEventListener('change', setColor);
