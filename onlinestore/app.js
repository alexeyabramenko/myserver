'use strict'

// let btnReg = document.querySelector('#btnReg');
// btnReg.insertAdjacentHTML('beforeend', '<svg width="17" height="10" viewBox="0 0 17 10" style="margin-left: 10px" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.54 0.208095C11.6058 0.142131 11.684 0.0897967 11.77 0.0540883C11.8561 0.01838 11.9483 0 12.0415 0C12.1347 0 12.2269 0.01838 12.313 0.0540883C12.399 0.0897967 12.4772 0.142131 12.543 0.208095L16.7929 4.458C16.8589 4.5238 16.9112 4.60196 16.9469 4.68802C16.9826 4.77407 17.001 4.86632 17.001 4.95949C17.001 5.05266 16.9826 5.14491 16.9469 5.23097C16.9112 5.31702 16.8589 5.39518 16.7929 5.46098L12.543 9.71089C12.41 9.84389 12.2296 9.91861 12.0415 9.91861C11.8534 9.91861 11.673 9.84389 11.54 9.71089C11.407 9.57788 11.3323 9.39749 11.3323 9.2094C11.3323 9.0213 11.407 8.84091 11.54 8.70791L15.2898 4.95949L11.54 1.21107C11.474 1.14528 11.4217 1.06711 11.386 0.981059C11.3503 0.895005 11.3319 0.802752 11.3319 0.709584C11.3319 0.616415 11.3503 0.524162 11.386 0.438109C11.4217 0.352055 11.474 0.273891 11.54 0.208095Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.95948C0 4.77162 0.0746263 4.59146 0.207462 4.45862C0.340297 4.32579 0.52046 4.25116 0.708318 4.25116H15.583C15.7708 4.25116 15.951 4.32579 16.0838 4.45862C16.2167 4.59146 16.2913 4.77162 16.2913 4.95948C16.2913 5.14734 16.2167 5.3275 16.0838 5.46033C15.951 5.59317 15.7708 5.6678 15.583 5.6678H0.708318C0.52046 5.6678 0.340297 5.59317 0.207462 5.46033C0.0746263 5.3275 0 5.14734 0 4.95948Z" fill="white"/></svg>');
// btnReg.addEventListener('mouseover', function(event){
//    event.target.children[0].innerHTML = '<svg width="17" height="10" viewBox="0 0 17 10" style="margin-left: 10px" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.54 0.208095C11.6058 0.142131 11.684 0.0897967 11.77 0.0540883C11.8561 0.01838 11.9483 0 12.0415 0C12.1347 0 12.2269 0.01838 12.313 0.0540883C12.399 0.0897967 12.4772 0.142131 12.543 0.208095L16.7929 4.458C16.8589 4.5238 16.9112 4.60196 16.9469 4.68802C16.9826 4.77407 17.001 4.86632 17.001 4.95949C17.001 5.05266 16.9826 5.14491 16.9469 5.23097C16.9112 5.31702 16.8589 5.39518 16.7929 5.46098L12.543 9.71089C12.41 9.84389 12.2296 9.91861 12.0415 9.91861C11.8534 9.91861 11.673 9.84389 11.54 9.71089C11.407 9.57788 11.3323 9.39749 11.3323 9.2094C11.3323 9.0213 11.407 8.84091 11.54 8.70791L15.2898 4.95949L11.54 1.21107C11.474 1.14528 11.4217 1.06711 11.386 0.981059C11.3503 0.895005 11.3319 0.802752 11.3319 0.709584C11.3319 0.616415 11.3503 0.524162 11.386 0.438109C11.4217 0.352055 11.474 0.273891 11.54 0.208095Z" fill="#F16D7F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.95948C0 4.77162 0.0746263 4.59146 0.207462 4.45862C0.340297 4.32579 0.52046 4.25116 0.708318 4.25116H15.583C15.7708 4.25116 15.951 4.32579 16.0838 4.45862C16.2167 4.59146 16.2913 4.77162 16.2913 4.95948C16.2913 5.14734 16.2167 5.3275 16.0838 5.46033C15.951 5.59317 15.7708 5.6678 15.583 5.6678H0.708318C0.52046 5.6678 0.340297 5.59317 0.207462 5.46033C0.0746263 5.3275 0 5.14734 0 4.95948Z" fill="#F16D7F"/></svg>';
//    event.target.style.transition = '0.5s';
// });

// btnReg.addEventListener('mouseout', function(event){
//     event.target.children[0].innerHTML = '<svg width="17" height="10" viewBox="0 0 17 10" style="margin-left: 10px" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.54 0.208095C11.6058 0.142131 11.684 0.0897967 11.77 0.0540883C11.8561 0.01838 11.9483 0 12.0415 0C12.1347 0 12.2269 0.01838 12.313 0.0540883C12.399 0.0897967 12.4772 0.142131 12.543 0.208095L16.7929 4.458C16.8589 4.5238 16.9112 4.60196 16.9469 4.68802C16.9826 4.77407 17.001 4.86632 17.001 4.95949C17.001 5.05266 16.9826 5.14491 16.9469 5.23097C16.9112 5.31702 16.8589 5.39518 16.7929 5.46098L12.543 9.71089C12.41 9.84389 12.2296 9.91861 12.0415 9.91861C11.8534 9.91861 11.673 9.84389 11.54 9.71089C11.407 9.57788 11.3323 9.39749 11.3323 9.2094C11.3323 9.0213 11.407 8.84091 11.54 8.70791L15.2898 4.95949L11.54 1.21107C11.474 1.14528 11.4217 1.06711 11.386 0.981059C11.3503 0.895005 11.3319 0.802752 11.3319 0.709584C11.3319 0.616415 11.3503 0.524162 11.386 0.438109C11.4217 0.352055 11.474 0.273891 11.54 0.208095Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.95948C0 4.77162 0.0746263 4.59146 0.207462 4.45862C0.340297 4.32579 0.52046 4.25116 0.708318 4.25116H15.583C15.7708 4.25116 15.951 4.32579 16.0838 4.45862C16.2167 4.59146 16.2913 4.77162 16.2913 4.95948C16.2913 5.14734 16.2167 5.3275 16.0838 5.46033C15.951 5.59317 15.7708 5.6678 15.583 5.6678H0.708318C0.52046 5.6678 0.340297 5.59317 0.207462 5.46033C0.0746263 5.3275 0 5.14734 0 4.95948Z" fill="white"/></svg>'
//     event.target.style.transition = '0.5s';
// });

const products = [
    {
        productId: 1,
        productImage: '/image/catalog_img_1.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 2,
        productImage: '/image/catalog_img_2.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 3,
        productImage: '/image/catalog_img_3.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 4,
        productImage: '/image/catalog_img_4.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 5,
        productImage: '/image/catalog_img_5.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 6,
        productImage: '/image/catalog_img_6.png',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 7,
        productImage: '/image/catalog_img_7.jpg',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 8,
        productImage: '/image/catalog_img_8.jpg',
        productName: "ELLERY X M'O CAPSULE",
        productDiscription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        productSize: '',
        productPrice: '$52.00',
        productBrand: '',
        productCategory: '',
    },
    {
        productId: 9,
        productImage: '/image/catalog_img_9.jpg',
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



