'use strict'

class Button {
    _text = ''
    _addClass = ''
    _addId = ''
    _callback = null
  
    constructor (text, addClass, addId, callback) {
        this._text = text
        this._addClass = addClass
        this._addId = addId
        this._callback = callback
    }
  
    onBtnClick () {
        const callback = this._callback
            if (typeof callback === 'function') {
                callback()
            }
    }
  
    getTemplate () {
        const btn = document.createElement('button')
        btn.classList.add(this._addClass)
        btn.id = this._addId
        
        return btn
    }
  
    render (placeToRender) {
        if (placeToRender) {
            const btn = this.getTemplate()
            btn.innerHTML = this._text
            placeToRender.appendChild(btn)
        
            btn.addEventListener('click', () => {
            this.onBtnClick()
            })
        }
    }
  }

class List {
    _items = []
    preloading = false
    _page = 1

    constructor () {
        this.initShowMoreButton() 
        this.fetchGoods()
            .then (this._items.forEach(Product => {
                Product.render()
            }))
        this.render();
        
    }

    initShowMoreButton () {
        const showMoreBtn = document.querySelector('.catalog__button')
        if (showMoreBtn) {
            showMoreBtn.addEventListener('click', () => {
                this._page++
                this.fetchGoods()
                this.render ()
            })
        }
    }

    fetchGoods () {
        this.preloading = true
        const url = `https://store-online-gb.herokuapp.com/data/data${this._page}.json`;
        return fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.preloading = false
                const goods = data.data.map(item => {
                    return new Product(item)
                })
                this._items = [...this._items, ...goods]
                return this._items
            })
            .then(this.render.bind(this))
            .catch((err) => {
                alert('No more pages')
            });
    }

    render () {
        const placeToRender = document.querySelector('.catalog__content')
        if (placeToRender) {
            placeToRender.innerHTML = ''
            this._items.forEach(Good => {
                Good.render(placeToRender)
                const checkBtn = document.querySelector(`#addCard-${Good._id}`) 
                if (!checkBtn) {
                    Good.btn()
                    Good.btnModify()
                    Good.addToCard()
                }
            })
        }
    }
}

class Product {
    _id = '';
    _image = '';
    _name = '';
    _description = '';
    _size = '';
    _color = '';
    _price = '';
    _brand = '';
    _category = '';
    _CartInstance = 1;

    constructor ({id, image, name, description, size, price, color, brand, category}) {
        this._id = id;
        this._image = image;
        this._name = name;
        this._description = description;
        this._size = size;
        this._color = color;
        this._price = price;
        this._brand = brand;
        this._category = category;
    }

    render () {
        const placeToRender = document.querySelector('.catalog__content');
        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add('catalog__item');
            block.id = this._id
            block.insertAdjacentHTML('afterbegin', 
            `<img class="catalog__image" src=${this._image} alt="product-image">
            </a><div class="catalog__item__content">
            <a class="catalog__item_heading" href="catalog.html">${this._name}</a>
            <p class="catalog__item_text">${this._description}</p>
            <p class="catalog__item_price">$ ${this._price}</p></div>`);
            placeToRender.appendChild(block);
        }
    }

    btn () {
        const btn = new Button ('Add to Cart', 'product-cart', `addCard-${this._id}`, this.addToCard.bind(this));
        btn.render(document.getElementById(`${this._id}`));
    }

    btnModify () {
        const btn = document.getElementById(`addCard-${this._id}`);
        if (btn) {
            btn.insertAdjacentHTML('afterbegin', '<svg width="27" class="product-cart-svg" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9509 23.2667H21.8386C21.2294 23.2667 20.7177 22.7671 20.6735 22.1294C20.629 21.4607 21.1175 20.8785 21.7626 20.8346C21.788 20.8329 21.8145 20.832 21.8405 20.832C22.4575 20.832 22.9743 21.3219 23.0201 21.9487C23.0319 22.1971 22.9914 22.5514 22.736 22.8439L22.73 22.8507L22.7242 22.8575C22.5275 23.0912 22.2607 23.2321 21.9509 23.2667ZM8.21887 23.2604C7.5683 23.2604 7.03906 22.7174 7.03906 22.05C7.03906 21.3832 7.5683 20.8406 8.21887 20.8406C8.86945 20.8406 9.39868 21.3832 9.39868 22.05C9.39868 22.7174 8.86945 23.2604 8.21887 23.2604Z" fill="white"/> <path d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z" fill="white"/></svg>');
            btn.addEventListener('click', function(event){
                    event.target.innerHTML = "Added";
                    event.target.style.opacity = '0.67'; 
                });
            btn.addEventListener('mouseover', function(event){
                event.target.style.transform = 'scale(1.05)';
                event.target.style.transition = '0.5s';
            });
            btn.addEventListener('mouseout', function(event){
                event.target.style.transform = 'scale(1)';
                event.target.style.transition = '0.5s';
            });
            
        }
    }

    addToCard () {
        function a() {
            if (localStorage.hasOwnProperty(`cart${this._id}`)) {
                const lsData = localStorage.getItem(`cart${this._id}`)
                const itemsInCart = JSON.parse(lsData)
                itemsInCart._CartInstance += 1;
                localStorage.setItem(`cart${this._id}`, JSON.stringify(itemsInCart));
            } else {
                localStorage.setItem(`cart${this._id}`, JSON.stringify(this));
            }
        }
        const btn = document.getElementById(`addCard-${this._id}`);
        if (btn) {
            btn.addEventListener('click', a.bind(this));
        }
    }
}

class Cart {
    _cartList = []

    constructor() {

        for (let key in localStorage) {
            if(localStorage.hasOwnProperty(key)) {
                const lsData = localStorage.getItem(key)
                const itemsInCart = JSON.parse(lsData)
                this._cartList.push(itemsInCart)
            }
        }

        for (let i = 0; i < this._cartList.length; i++){
            this.render(this._cartList[i])
            this.removeProduct(this._cartList[i])
        }
    
        this.removeAll()
    }

    render (item) {
        const placeToRender = document.querySelector('.cart__content');
        if (placeToRender && this._cartList != '') {
            placeToRender.insertAdjacentHTML('afterbegin', 
            `<div id="card-${item._id}" class="card">
                <img src=${item._image} alt="card__image" class="card-image">
                <div class="card__info">
                    <a href="product.html" class="card__heading">${item._name}</a>
                    <p class="card__price">Price: </p>
                    <p class="card__price card__price_color">$ ${item._price}</p>
                    <p class="card__text">Color: ${item._color}</p>
                    <p class="card__text">Size: ${item._size}</p>
                    <p class="card__text">Quantity:	${item._CartInstance}</p>
                    <button id=${item._id} class="card__remove-product"><img src="image/close-button.svg" alt="close-button"></button>
                </div>
            </div>`)
        }
    }

    removeProduct (item) {
        if (this.cartList != ''){
            const closeBtn = document.getElementById(`${item._id}`)
            const idProduct = item._id
            if (closeBtn) {
                closeBtn.addEventListener('click', function(event) {
                    let block = document.getElementById(`card-${idProduct}`)
                    block.parentNode.removeChild(block)
                    localStorage.removeItem(`cart${idProduct}`)
                })
        }}
    }

    removeAll () {
        const btnRemove = document.getElementById('clear');
        if (btnRemove) {
            btnRemove.addEventListener('click', function(event){
                const card = document.querySelectorAll('.card')
                if (card) {
                    card.forEach(element => {
                        element.parentNode.removeChild(element)
                    })
                    localStorage.clear()
                }
            })
        }
    }
}

class Feedback {

}

const btnReg = document.querySelector('#btnReg'); 
if (btnReg) {
    btnReg.addEventListener('click', function(e){
        let block = e.target.parentNode;
        const formName = block.querySelectorAll('#name');
        const formPhone = block.querySelector('#phone');
        const formEmail = block.querySelector('#email');
        const checkFormName = /^[\S][a-zA-Z\s]*$/;
        const checkPhone = /^\+(7)\(\d\d\d\)\d\d\d\d-\d\d\d$/; // /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/
        const checkEmail = /^\w+@[a-z]+\.[a-z]+$/i;
        formName.forEach(elem => {
            if(!elem.value.match(checkFormName)) {
                console.log('Имя или фамилия введены не правильно. Введите только буквы')
            } else {
                console.log('Данные валидны')
            }
        });
        if(!formPhone.value.match(checkPhone)){
            console.log('Телефон указан в неверном формате');
        } else if(!formEmail.value.match(checkEmail)){
            console.log('Email указан в неверном формате')
        } else {
            console.log('Данные валидны')
        }

    });
}

const InstanceList = new List;
const InstanceCart = new Cart;


