function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
	// Slider

	const slides = document.querySelectorAll(slide),
	slider = document.querySelector(container),
		prev = document.querySelector(prevArrow),
		next = document.querySelector(nextArrow),
		total = document.querySelector(totalCounter),
		current = document.querySelector(currentCounter),
		slidesWrapper = document.querySelector(wrapper),
		slidesField = document.querySelector(field),
		width = window.getComputedStyle(slidesWrapper).width; // собираем стили у элементов после рендеринга

	let slideIndex = 1;
	let offset = 0;

	// indicators for slider
	slider.style.position = 'relative';

	const indicators = document.createElement('ol'),
		dots = [];

	indicators.classList.add('carousel-indicators');

	slider.append(indicators);

	function setDotOpacity() {
		dots.forEach(dot => dot.style.opacity = '.5');
		dots[slideIndex - 1].style.opacity = 1;
	}

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');
		if (i === 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}
	//

	function setNum() {
		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}
	}

	function toNumberWithoutString(width) {
		return +width.replace(/\D/g, '');
	}

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all ease';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach(slide => {
		slide.style.width = width;
	});

	next.addEventListener('click', () => {
		if (offset === toNumberWithoutString(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += toNumberWithoutString(width);

		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}
		setNum();

		setDotOpacity();

	});

	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = toNumberWithoutString(width) * (slides.length - 1);
		} else {
			offset -= toNumberWithoutString(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		setNum();

		setDotOpacity();
	});

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = toNumberWithoutString(width) * (slideTo - 1);

			slidesField.style.transform = `translateX(-${offset}px)`;

			setNum();

			setDotOpacity();
		});
	});

}

export default slider;