const containers = document.querySelectorAll(".container");

for(i = 0; i < containers.length; i++){
    containers[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}


// const dl = document.querySelector("dl");
// const dts = dl.querySelectorAll("dt");
// // const dds = dl.querySelectorAll("dd");
// let i;

// for(i = 0; i < dts.length; i++ ){
//     dts[i].addEventListener('click', ()=>{
//         this.classList.remove(on);

//     let dd = this.nextElementSibling;
//         if(dd.style.display === "block"){
//             dd.style.display = "none";
//         } else {
//             dd.style.display === "block"
//         }
//     })
// }


// dl.addEventListener('click', (e)=>{
//     let targetdt = e.target.closest("dt");

//     activation(dts);
//     activation(dds);

//     targetdt.classList.add("on");
//     targetdt.nextElementSibling.classList.add("on");

// })

// function activation(item){
//     for(let el of item){
//         el.classList.remove("on");
//     }
// }