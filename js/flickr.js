/*
key : 1410239e47f32f3f403f70fd3c998b38

flickr.interestingness.getList

https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value

flickr.photos.search
*/

const body = document.querySelector("body");
const frame = document.querySelector("#list");
const loading = document.querySelector(".loading");
const input = document.querySelector("#search");
const btnSearch = document.querySelector(".btnSearch");
const base = "https://www.flickr.com/services/rest/?";
const method1 = "flickr.interestingness.getList";
const method2 = "flickr.photos.search";
const key = "1410239e47f32f3f403f70fd3c998b38";
const per_page = 20;
const url=  `${base}method=${method1}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1`;

callData(url);

function callData(url){
    fetch(url)
    .then(data=>{
       return data.json();
    })
    .then((json)=>{
        let items = json.photos.photo;

        if(items.length > 0){
            createList(items);
            delayLoading();
        } else {
            loading.classList.add("off");
        }
    });
}

function createList(items){
    let htmls = "";

    items.map(data=>{
        console.log(data);

        let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`

        let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`

        htmls += `
                <li class="item">
                <div>
                    <a href="${imgSrcBig}">
                        <img src="${imgSrc}" class="thumb" alt="">
                    </a>
                    <p>${data.title}</p>
                    <span>
                    <img class="profile" src="http://farm${data.farm}.staticflickr.com/${data.server}/buddyicons/${data.owner}.jpg" alt="">
                    <strong>${data.owner}</strong> 
                    </span>
                </div>
            </li>
        `
    })

    frame.innerHTML = htmls;
}
function delayLoading(){
    const imgs = frame.querySelectorAll("img");
    const len = imgs.length;
    let count = 0;

    for(let el of imgs){
        el.onload = ()=>{
            count++;

            if(count == len) isoLayout();
        }
    }
}

function isoLayout(){
    loading.classList.add("off");
    frame.classList.add("on");

    new Isotope("#list", {
        itemSelector : ".item",
        columnwidht : ".item",
        transitionDuration : "0.5s"
    })
}