const navbutton=document.querySelector("#ham-btn");
const navlinks=document.querySelector("#nav-bar");

export function navigation(){

navbutton.addEventListener("click",()=>{
    navbutton.classList.toggle("show");
    navlinks.classList.toggle("show");
})
};
export function footer(){

document.addEventListener("DOMContentLoaded",()=>{

const yearjs=document.querySelector("#year");

const year = new Date();

yearjs.innerHTML=year.getFullYear();

const lastmodifiedjs=document.querySelector("#lastmodified");
const lastModified = new Date(document.lastModified);
const formattedDate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short"
}).format(lastModified);

lastmodifiedjs.textContent = formattedDate;
})
};