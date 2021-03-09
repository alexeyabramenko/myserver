'use strict'

export default class Cart {
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

const InstanceCart = new Cart;
