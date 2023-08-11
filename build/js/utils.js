/**
 * Получение случайного числа в заданном диапазоне включая границы с заданным округлением
 * @param {Number} min - Нижняя граница генерации
 * @param {Number} max - Верхняя граница генерации
 * @param {Number} round - Колличество знаков после запятой. Целое число. По-умолчанию равнно 0
 */ 

const getRandomBetween = function (min=0, max=1, round=0) {
    if (min > max) {
        const temp = max
        max = min
        min = temp 
    }
    const roundRatio = round ? round * 10: 1
    return Math.round((Math.random() * (max-min) + min) * roundRatio)/roundRatio
}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }


export {getRandomBetween, setAttributes}