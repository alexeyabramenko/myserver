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

class AbstractList {
    _items = [];

    constructor () {
        this.fetchGoods()
            .then(res => {
                return res.json()
            })
            .then(data => {
                const goods = data.data.map(item => {
                    return new Product(item)
                })
                this._items = goods
                return this._items
            })
            .then(this.render.bind(this));
    }

    fetchGoods () {
        const url = 'http://localhost:3000/data/data1.json';
        return fetch(url);
    }
}

class List extends AbstractList {
    constructor () {
        super();
        this.render();
    }

    render () {
        this._items.forEach(Good => {
            Good.render();
            Good.btn();
            Good.btnModify();
            Good.addToCard();
        });  
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
            <p class="catalog__item_price">${this._price}</p></div>`);
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
            btn.insertAdjacentHTML('afterbegin', '<img src="image/product_cart.svg" style="margin-right: 10px" alt="cart">');
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
            localStorage.setItem('cart', this._id);
        }
        const btn = document.getElementById(`addCard-${this._id}`);
        if (btn) {
            btn.addEventListener('click', a.bind(this));
        }
    }
}

class Cart {
    cartList = []

    constructor(InstanceList) {
        let url = 'http://localhost:3000/data/data1.json';
        let promise = fetch(url)
            .then(res => res.json())
            .then(data => {
                let element = null
                let id = Number(localStorage.getItem('cart'));
                let test = data.data.map(item => {
                    if (item.id === id)
                    element = new CartElement(item);
                })
            if (element != null || undefined){
                this.cartList = element
                this.render()
                this.removeProduct()
            }
            })
    }

    render () {
        const placeToRender = document.querySelector('.cart__content');
        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add('card');
            block.id = `card-${this.cartList._id}`;
            block.insertAdjacentHTML('afterbegin', `<img src=${this.cartList._image} alt="card__image" class="card-image">
            <div class="card__info">
                <a href="product.html" class="card__heading">${this.cartList._name}</a>
                <p class="card__price">Price: </p>
                <p class="card__price card__price_color">${this.cartList._price}</p>
                <p class="card__text">Color: ${this.cartList._color}</p>
                <p class="card__text">Size: ${this.cartList._size}</p>
                <p class="card__text">Quantity:	<input class="card__input" type="number" min="1" max="5" value="2"></p>
                <button id=${this.cartList._id} class="card__remove-product"><img src="image/close-button.svg" alt="close-button"></button>
            </div>`)
            placeToRender.appendChild(block);
        }
    }

    removeProduct () {
        const closeBtn = document.getElementById(`${this.cartList._id}`);
        if (closeBtn) {
            closeBtn.addEventListener('click', function(event){
                let blockRemove = document.getElementById(`card-${this.cartList._id}`);
                blockRemove.remove();
                localStorage.removeItem('itemCart');
            });
        }
    }
}

class CartElement {
    id = '';
    image = '';
    name = '';
    description = '';
    size = '';
    color = '';
    price = '';
    brand = '';
    category = '';
    count = '';

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

} 

const InstanceList = new List;
const InstanceCart = new Cart (InstanceList);