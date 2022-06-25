/*
key : AIzaSyCVnqQLlCzUMqd8pqBHc34g-onr96Z0TaM

playlist : PL0Rto-Av72qHWnhIdz3cs9CAEL0Z1R2Ln
youtube에서 list뒤에 키 복사.
*/

const video = document.querySelector("#video");
const inner = video.querySelector(".inner");
const hidden_vid = video.querySelector(".inner .hidden_vid");
const play_img = video.querySelector(".inner .play_img");
const playListId = "PL0Rto-Av72qHWnhIdz3cs9CAEL0Z1R2Ln";
const key = "AIzaSyCVnqQLlCzUMqd8pqBHc34g-onr96Z0TaM";
const num = 1;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

fetch(url)
.then(data=>{
    return data.json();
})
.then(json=>{

    let items = json.items;
    console.log(items);

    let result = '';

    items.map((item)=>{
        result +=`
            <a href="${item.snippet.resourceId.videoId}" class="pic">
                <img src="${item.snippet.thumbnails.medium.url}">
            </a>
        `;
        console.log(result);
    });
    hidden_vid.innerHTML = result;
});


    hidden_vid.addEventListener('click',(e)=>{
        e.preventDefault();
    
        const vidId = e.target.closest("article").querySelector("a").getAttribute("href");

        let pop = document.createElement('figure');
        pop.classList.add("pop");
        pop.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${vidId}"
            frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
            <span class="btnClose">close</span>
        `
        inner.append(pop);
    });

    video.addEventListener("click", (e)=>{
        const pop = video.querySelector("pop");
        if(pop){
            const close = pop.querySelector("span");
            if(e.target == close) pop.remove();
        }
    });


    // vidPlay.addEventListener("click", (e)=>{
    //     e.preventDefault();

    //     const vidId = e.target.closest("a").getAttribute("href");
    //     let pop = document.createElement("figure");
    //     pop.classList.add(pop);
    //     pop.innerHTML =`
    //     `

    // })

/* scroll */
