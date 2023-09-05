const MAX_HASHTAGS = 5;
const MAX_COMMENTLENGTH = 140;
const MIN_SYMBOLS = 2;
const MAX_SYMBOLS = 20;

const fieldHashtags = document.querySelector('.text__hashtags')
const fieldComment = document.querySelector('.text__description')

fieldHashtags.addEventListener('input', (evt) => {
  const inputHashtags = evt.target
  const valueHashtags = inputHashtags.value.toLowerCase().trim()

  inputHashtags.setCustomValidity('')

  if (!valueHashtags) return;

  const arrayHashtags = valueHashtags.split(/\s+/)
  if (arrayHashtags.length > 5) {
    inputHashtags.setCustomValidity('Максимум 5 хеш-тегов')
  } else if (arrayHashtags.some(item => item[0] != '#')) {
    inputHashtags.setCustomValidity('Хеш-тег должен начинаться с решетки (#)')
  } else if (arrayHashtags.some(item => item.length < MIN_SYMBOLS || item.length > MAX_SYMBOLS)) {
    inputHashtags.setCustomValidity('Хеш-тег должен содержать от 1 до 20 символов')
  } else if (arrayHashtags.some(item => item.includes('#', 1) )) {
    inputHashtags.setCustomValidity('Между хеш-тегами должен быть пробел')
  } else if (arrayHashtags.some(item => !(/^#[a-zа-яё0-9_]+$/.test(item)) )) {
    inputHashtags.setCustomValidity('Хэштеги должны содержать только буквы или цифры')
  } else if ( arrayHashtags.some((_, index, arr) => arr[index] == arr[index + 1])) {
    inputHashtags.setCustomValidity('Хеш-теги должны различаться. Регистр не учитывается')
  }

  // В Firefox иначе не изменяется сообщение с ошибкой
  inputHashtags.blur()
  inputHashtags.focus()
  //отправляем сообщение-балун
  inputHashtags.reportValidity();
});

fieldComment.addEventListener('input', (evt) => {
  const valueComment = evt.target
  valueComment.setCustomValidity('')

  if (valueComment.value.length > 140) {
    valueComment.setCustomValidity('Длина комментария не может составлять больше 140 символов')
  }
  
  valueComment.reportValidity();
});