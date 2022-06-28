const sections = document.querySelectorAll(".section");
const items = document.querySelector(".scroll");
const posArr = [];
const base = -400;

for(let el of sections){
    posArr.push(el.offsetTop);
}
// console.log(posArr);
window.addEventListener("scroll",()=>{
    let scroll = window.scrollY || window.pageYOffset;

    sections.forEach((el,index)=>{
        if(scroll>=posArr[index] + base){
            for(let el of sections){
                el.classList.remove("on");
            }
            sections[index].classList.add("on");
        }
    })
})