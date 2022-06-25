const sections = document.querySelectorAll(".section");
const intro = document.querySelector("#introduction");
const lis = intro.querySelectorAll("ul li");
const posArr = [];

for(let el of sections){
    posArr.push(el.offsetTop);
}
console.log(posArr);

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY || window.pageYOffset;

    sections.forEach((el,index)=>{
        if(scroll >= posArr[index]){
            lis.forEach((li)=>{
                li.classList.remove("on");
            });

            lis[index].classList.add("on");
        }
    })
})