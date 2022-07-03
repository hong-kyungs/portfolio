/*
API : application prgramming interface

key : AIzaSyCVnqQLlCzUMqd8pqBHc34g-onr96Z0TaM

playlist : PL0Rto-Av72qHWnhIdz3cs9CAEL0Z1R2Ln
youtube에서 list뒤에 키 복사.
*/
const vidList = document.querySelector(".vidList");
const key = "AIzaSyCVnqQLlCzUMqd8pqBHc34g-onr96Z0TaM";
const playlistId ="PL0Rto-Av72qHWnhIdz3cs9CAEL0Z1R2Ln";
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

fetch(url)
.then((data)=>{
    return data.json();
})
.then((json)=>{
    let items = json.items;
    console.log(items);

    let result = '';

    items.map((item,index)=>{
        let title = item.snippet.title;

        if(title.length > 30){
            title = title.substr(0, 30) + "...";
        }

        let vid_con = item.snippet.description;
        if(vid_con.length > 100){
            vid_con = vid_con.substr(0, 100) + "...";
        }


        result += `
                <article>
                    <h2>${0 + [index + 1] + "."}</h2>
                    <a href="${item.snippet.resourceId.videoId}" class="pic">
                        <img src="${item.snippet.thumbnails.medium.url}">
                    </a>
                    <div class="vid_con">
                        <h3>${title}</h3>
                        <p>${vid_con}</p>
                        <a href="#" class="play_btn">play</a>
                    </div>
                </article>
        `
    })

    vidList.innerHTML = result;
})