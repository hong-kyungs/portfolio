window.addEventListener('load', () => {
	const grid = new Isotope('.product-list', {
		itemSelector: 'article',
		columnWidth: 'article',
		transitionDuration: '0.5s',
	});

	const btns = document.querySelectorAll('section .inner ul li');
	console.log(btns);

	for (let btn of btns) {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			const sort = e.currentTarget.querySelector('a').getAttribute('href');

			grid.arrange({
				filter: sort,
			});

			for (let btn of btns) {
				btn.classList.remove('on');
			}

			e.currentTarget.classList.add('on');
		});
	}
});

const product = document.querySelector('.product');
const list = product.querySelector('.product-list');

list.addEventListener('click', (e) => {
	e.preventDefault();

	let target = e.target.closest('img');
	if (e.target == target) {
		let imgSrc = e.target.closest('img').getAttribute('src');
		let pop = document.createElement('aside');
		let pop_in = `
						<div class="aside_inner">
								<img src="${imgSrc}">
								<span class="close"><i class="fa-solid fa-xmark"></i></span>
						</div>
		`;
		pop.innerHTML = pop_in;
		product.append(pop);
		document.body.style.overflow = 'hidden';
	}
});

product.addEventListener('click', (e) => {
	const target = product.querySelector('aside');
	const close = target.querySelector('.aside_inner .close i');
	if (e.target == close) {
		target.remove();
		document.body.style.overflow = 'visible';
	}
});
