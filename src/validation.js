'use strict'

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