import tabs from './modules/tabs'
import cards from './modules/cards'
import calc from './modules/calc'
import timer from './modules/timer'
import slider from './modules/slider'
import modal from './modules/modal'
import forms from './modules/forms'

import { toggleModal } from './modules/modal'



window.addEventListener('DOMContentLoaded', () => {
    const timerModal = setTimeout(() => toggleModal('add', `.modal`, timerModal), 5000)

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    cards()
    calc()
    timer('2022-08-10')
    modal(`[data-modal]`, '.modal', timerModal)
    forms('form', timerModal)
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: `.offer__slider-wrapper`,
        field: '.offer__slider-inner',
    })



})