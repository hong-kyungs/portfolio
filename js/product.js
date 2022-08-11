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
