import {getRandomBetween} from './utils.js'

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Нельзя быть такой совершенной!', 
];

const DESCRTIPTION = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!',
  'Это лучшее что я видел в жизни!',
  'Какое-то недоразумение ахаха',
];

const COMMENTS_AMOUNT_LIMIT = 10;
const LIKES_LIMIT_DOWN = 15;
const LIKES_LIMIT_UP = 200;

// Генерируем список индексов картинок
const URLS_IMAGES_AMOUNT = 25
const URLS_IMAGES = Array.from({length: URLS_IMAGES_AMOUNT}, (value, index) => index + 1)

/**
 * Получение случайного неповторяющегося элемента массива
 * @param {Array} arr - Исходный массив 
 * @returns {} Случайный элемент массива
 */

const getRandomArrayElementNoRepeat = (arr) => {
    const randomIndex = getRandomBetween(0, arr.length - 1)
    return arr.splice( randomIndex, 1)[0]
}

/**
 * Получение случайного элемента массива
 * @param {Array} arr - Исходный массив
 * @returns Случайный элемент массива
 */
const getRandomArrayElement = (arr) => {
    return arr[getRandomBetween(0, arr.length - 1)];
};

/**
 * Получение комментария
 * @param {Array} comments - Массив строк 
 * @returns {String} строка состоящая из 1 или 2 случайных неповторяющихся строк массива
 */

const createComment = ([...comments]) => {
    const amountNumber = getRandomBetween(1, 2);
    let listString = [];
    for (let i = 0; i < amountNumber; i++) {
        listString.push(getRandomArrayElementNoRepeat(comments))
    };
    return listString.join(' ')
};

const createPost = () => {
    return {
        url: `photos/${getRandomArrayElementNoRepeat(URLS_IMAGES)}.jpg`,
        likes: getRandomBetween(LIKES_LIMIT_DOWN, LIKES_LIMIT_UP),
        comments: Array.from({ length: getRandomBetween(1, COMMENTS_AMOUNT_LIMIT)}, () => createComment(COMMENTS)),
        description: getRandomArrayElement(DESCRTIPTION),
    }
}

const createArrayPosts = () => Array.from({ length: URLS_IMAGES_AMOUNT }, createPost);

export { createArrayPosts }