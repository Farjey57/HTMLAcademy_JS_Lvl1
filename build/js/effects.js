/* global noUiSlider:readonly */

const rangeNoUiSlider = document.querySelector('.effect-level__slider')
const effectLevelSlider = document.querySelector('.effect-level__value')
const uploadPreview = document.querySelector('.img-upload__preview > img')
const effectRadioGroup = document.getElementsByName('effect')
const fieldEffectLevel = document.querySelector('.effect-level')

const NoUiSliderOptions = {
  none: { options: {
    range: {
      'min': 0,
      'max': 1,
    },
    start: 1,
    step: 0.01,
  },
  effect: '',
  unit: '',
  },
  chrome: { options: {
    range: {
      'min': 0,
      'max': 1,
    },
    start: 1,
    step: 0.01,
  },
  effect: 'grayscale',
  unit: '',
  },
  sepia: { options: {
    range: {
      'min': 0,
      'max': 1,
    },
    start: 1,
    step: 0.01,
  },
  effect: 'sepia',
  unit: '',
  },
  marvin: { options: {
    range: {
      'min': 0,
      'max': 100,
    },
    start: 100,
    step: 0.1,
  },
  effect: 'invert',
  unit: '%',
  },
  phobos: { options: {
    range: {
      'min': 0,
      'max': 3,
    },
    start: 3,
    step: 0.1,
  },
  effect: 'blur',
  unit: 'px',
  },
  heat: { options: {
    range: {
      'min': 1,
      'max': 3,
    },
    start: 3,
    step: 0.1,
  },
  effect: 'brightness',
  unit: '',
  format: {
    // 'to' the formatted value. Receives a number.
    to: function (value) {
        return value;
      },
    // 'from' the formatted value.
    // Receives a string, should return a number.
    from: function (value) {
        return value;
      }
    }
  },
}

noUiSlider.create(rangeNoUiSlider, {
  start: 100,
  connect: 'lower',
  step: 0.01,
  range: {
    'min': 0,
    'max': 1,
  },
});

function setFilter(event) {
  const value = event.target.value
  if (value == 'none') {
    setDefaultOptions ()
  } else {
    uploadPreview.className = `effects__preview--${value}`;
    fieldEffectLevel.classList.remove('hidden')
    rangeNoUiSlider.noUiSlider.on('update', (valueу, handle, unencoded) => {
      console.log(valueу[handle])
      effectLevelSlider.value = unencoded[handle];
      uploadPreview.style.filter = `${NoUiSliderOptions[value].effect}(${effectLevelSlider.value + NoUiSliderOptions[value].unit})`
    })
  }
  rangeNoUiSlider.noUiSlider.updateOptions(NoUiSliderOptions[value].options)
}

function setDefaultOptions () {
  fieldEffectLevel.classList.add('hidden')
  uploadPreview.removeAttribute('class')
  uploadPreview.removeAttribute('style')
  rangeNoUiSlider.noUiSlider.off()
}

export {setDefaultOptions, effectRadioGroup, setFilter}