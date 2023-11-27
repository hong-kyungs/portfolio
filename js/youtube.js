const vidList = document.querySelector('.vidList');
const key = config.youtubeKey;
const playlistId = 'PL0Rto-Av72qHWnhIdz3cs9CAEL0Z1R2Ln';
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;
const play_btns = vidList.querySelectorAll('.play_btn');

fetch(url)
	.then((data) => {
		return data.json();
	})
	.then((json) => {
		let items = json.items;
		console.log(items);

		let result = '';

		items.map((item, index) => {
			let title = item.snippet.title;

			if (title.length > 30) {
				title = title.substr(0, 30) + '...';
			}

			let vid_con = item.snippet.description;
			if (vid_con.length > 100) {
				vid_con = vid_con.substr(0, 100) + '...';
			}

			result += `
                <article>
                    <h2>${0 + [index + 1] + '.'}</h2>
                    <a href="${item.snippet.resourceId.videoId}" class="pic">
                        <img src="${item.snippet.thumbnails.medium.url}">
                    </a>
                    <div class="vid_con">
                        <h3>${title}</h3>
                        <p>${vid_con}</p>
                        <a href="#" class="play_btn">play</a>
                    </div>
                </article>
        `;
		});

		vidList.innerHTML = result;
	});

vidList.addEventListener('click', (e) => {
	e.preventDefault();

	const vidId = e.target.closest('a').getAttribute('href');
	let pop = document.createElement('figure');
	pop.classList.add('pop');
	pop.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
    <span class="btnClose"><i class="fa-solid fa-x"></i></span>
    `;
	vidList.append(pop);
	document.body.style.overflow = 'hidden';
});

vidList.addEventListener('click', (e) => {
	// e.preventDefault();
	const pop = vidList.querySelector('.pop');
	if (pop) {
		const close = pop.querySelector('span i');
		if (e.target == close) {
			pop.remove();
			document.body.style.overflow = 'visible';
		}
	}
});
