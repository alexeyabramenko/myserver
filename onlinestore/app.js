'use strict'

const products = [
    {
        productId: 1,
        productImage: 'image/catalog_img_1.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 2,
        productImage: 'image/catalog_img_2.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 3,
        productImage: 'image/catalog_img_3.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 4,
        productImage: 'image/catalog_img_4.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 5,
        productImage: 'image/catalog_img_5.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 6,
        productImage: 'image/catalog_img_6.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 7,
        productImage: 'image/catalog_img_7.jpg',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 8,
        productImage: 'image/catalog_img_8.jpg',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 9,
        productImage: 'image/catalog_img_9.jpg',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    }
];

let cart = [];

window.addEventListener('DOMContentLoaded', function(event){
    const indexProducts = document.querySelector('#index');
    const catalogProducts = document.querySelector('#catalog');
    for (let i = 0; i < 9; i++){
        let card = `<div class="catalog__item"><a href="#"><img class="catalog__image" src=${products[i].productImage} alt="product"></a><div class="catalog__item__content"><a class="catalog__item_heading" href="catalog.html">${products[i].productName}</a><p class="catalog__item_text">${products[i].productDiscription}</p><p class="catalog__item_price">${products[i].productPrice}</p></div></div>`
        if (indexProducts != null && i < 6) {
            indexProducts.insertAdjacentHTML('beforeend', `${card}`);
        } else if (catalogProducts != null){
            catalogProducts.insertAdjacentHTML('beforeend', `${card}`);
        }
    }

    const loadProductsBar = document.querySelectorAll('.catalog__item');
    loadProductsBar.forEach(catalog => {
        catalog.insertAdjacentHTML('afterbegin', '<button id="addCard" class="product-cart">Add to Cart</button>');
    });

    const btnAddToCard = document.querySelectorAll('#addCard');

    btnAddToCard.forEach(button => {
        button.insertAdjacentHTML('afterbegin', '<img src="image/product_cart.svg" style="margin-right: 10px" alt="cart">');
        button.addEventListener('click', function(event){
            event.target.innerHTML = "Added";
            event.target.style.opacity = '0.67';
        });
        button.addEventListener('mouseover', function(event){
            event.target.style.transform = 'scale(1.05)';
            event.target.style.transition = '0.5s';
        });
        button.addEventListener('mouseout', function(event){
            event.target.style.transform = 'scale(1)';
            event.target.style.transition = '0.5s';
        });
    });

});





