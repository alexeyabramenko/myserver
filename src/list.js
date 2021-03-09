'use strict'

import Product from './product.js';

export default class List {
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

const InstanceList = new List;