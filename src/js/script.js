import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import slider from './modules/slider';
import forms from './modules/forms';
import timer from './modules/timer';
import calc from './modules/calc';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000)

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	modal('[data-modal]', '.modal');
	cards();
	slider({
		container: '.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});
	forms('form', modalTimerId);
	timer('.timer', '2025.12.12');
	calc();

});

