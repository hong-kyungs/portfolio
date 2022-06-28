
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo")

btnCall.addEventListener("click", (e)=>{
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
})