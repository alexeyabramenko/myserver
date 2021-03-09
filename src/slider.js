'use strict'

document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

let leftArrow = document.createElement('button');
leftArrow.classList.add('slider__button_left');
slider.insertAdjacentElement("beforeend", leftArrow);
leftArrow.insertAdjacentHTML('afterbegin', '<i class="fas fa-chevron-left"></i>');

let rightArrow = document.createElement('button');
rightArrow.classList.add('slider__button_right');
slider.insertAdjacentElement("beforeend", rightArrow);
rightArrow.insertAdjacentHTML("afterbegin", '<i class="fas fa-chevron-right"></i>');

window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });
    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });
    images.data();
    hideLoadIcon(loadIcon);
});

function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

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

let images = {
    currentIdx: 0,

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

    init() {
        this.slides = document.querySelectorAll('.slider__image');
        this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

      hideVisibleImage() {
        this.slides[this.currentIdx].classList.add("hidden-slide");
      },

    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

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

