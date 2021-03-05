'use strict'

document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

// Создаем иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

// Создаем левую стрелку
let leftArrow = document.createElement('button');
leftArrow.classList.add('slider__button_left');
slider.insertAdjacentElement("beforeend", leftArrow);
leftArrow.insertAdjacentHTML('afterbegin', '<i class="fas fa-chevron-left"></i>');

// Создаем правую стрелку
let rightArrow = document.createElement('button');
rightArrow.classList.add('slider__button_right');
slider.insertAdjacentElement("beforeend", rightArrow);
rightArrow.insertAdjacentHTML("afterbegin", '<i class="fas fa-chevron-right"></i>');

// Ждем когда весь контент целиком загрузится
window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });

    // Инициализация слайдера
    images.data();
    // Скрываем иконку загрузки
    hideLoadIcon(loadIcon);
});

/**
 * Функция скрывает иконку загрузки
 * @param {HTMLElement} loadIcon 
 */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

/**
 * Функция берет у элемента слайдера его data-атрибуты размеров,
 * и если они определены, то самому слайдеру меняет размеры.
 * @param {HTMLDivElement} slider 
 */
function setSizes(slider) {
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider.style.width = width;
    }
    if (height !== null && height !== "") {
        slider.style.height = height;
    }
}
setSizes(slider);

// Объект слайдера
let images = {
    /* {int} Номер текущего изображения */
    currentIdx: 0,

    /* {HTMLDivElement[]} slides элементы слайдов */
    slides: [],

    giveData() {
        const url = 'http://localhost:3000/data/data1.json';
        return fetch(url);
    },
    
    data() {
        this.giveData()
            .then (res => {
                return res.json()
            })
            .then (data => {
                data.data.forEach(item => {
                    this.render(item.image)
                })
                this.init()
            })
    },

    render(image) {
        const placeToRender = document.querySelector('.slider');
        if (placeToRender){
            placeToRender.insertAdjacentHTML('afterbegin', `<img data-width="1024" data-height="768" class="slider__image hidden-slide" src=${image} alt="slider"></img>`)
        }
    },

    /** Получаем все слайды и показываем первый слайд. */
    init() {
        this.slides = document.querySelectorAll('.slider__image');
        this.showImageWithCurrentIdx();
    },

    /** Берем слайд с текущим индексом и убираем у него класс
     * hidden-slide. */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    /** Видимому (текущему) слайду добавляем класс hidden-slide. */
      hideVisibleImage() {
        this.slides[this.currentIdx].classList.add("hidden-slide");
      },

    /** Переключиться на предыдущее изображение. */
    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

    /** Переключиться на следующее изображение. */
    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    },
}

