const navbutton=document.querySelector("#ham-btn");
const navlinks=document.querySelector("#nav-bar");

export function navigation(){

navbutton.addEventListener("click",()=>{
    navbutton.classList.toggle("show");
    navlinks.classList.toggle("show");
})
};