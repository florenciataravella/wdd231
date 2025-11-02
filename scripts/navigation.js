const navbutton=document.querySelector("#ham-btn");
const navlinks=document.querySelector("#nav-bar");
navbutton.addEventListener("click",()=>{
    navbutton.classList.toggle("show");
    navlinks.classList.toggle("show");
})

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

