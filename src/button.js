'use strict'

export default class Button {
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