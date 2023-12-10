const sections = document.querySelectorAll('.section');
const items = document.querySelector('.scroll');
const posArr = [];
const base = -400;

for (let el of sections) {
	posArr.push(el.offsetTop);
}
// console.log(posArr);
window.addEventListener('scroll', () => {
	let scroll = window.scrollY || window.pageYOffset;

	sections.forEach((el, index) => {
		if (scroll >= posArr[index] + base) {
			// for(let el of sections){
			//     el.classList.remove("on");
			// }
			sections[index].classList.add('on');
		} else if (scroll === 0) {
			for (let el of sections) {
				el.classList.remove('on');
			}
		}
	});
});

// scroll to top
const scroll_btn = document.querySelector('.scroll_btn');

window.addEventListener('scroll', () => {
	btnvisibility();
});

scroll_btn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

function btnvisibility() {
	if (window.scrollY > 100 || window.pageYOffset > 100) {
		scroll_btn.style.visibility = 'visible';
	} else {
		scroll_btn.style.visibility = 'hidden';
	}
}
