const gallery = document.querySelector(".gallery")
const imgs = gallery.querySelectorAll(".g_img");


for(let i=0; i<imgs.length; i++){
imgs[i].addEventListener('click', function (e) {

    const g_img = e.target.closest("img").getAttribute("src");

    let g_pop = document.createElement("aside");
    let pop_in = `
            <div class="aside_inner">
                <img src="${g_img}">
                <span class="close"><i class="fa-solid fa-xmark"></i><span>
            </div>
    ` 
    g_pop.innerHTML = pop_in;
    gallery.append(g_pop);
})
}

gallery.addEventListener('click', (e) => {
    let target = e.target.closest("aside");
    let close = target.querySelector(".aside_inner .close i");

    if(e.target == close) target.remove();
})