import { footer } from "./footer_navigation.mjs";
import { navigation } from "./footer_navigation.mjs";

import { images } from "../data/gym-pictures.js";


navigation();
footer();
const divp=document.querySelector(".gym-pictures")
    const myD=document.querySelector("#myDialog")
    const closeD=document.querySelector("#closeDialog")
    
    
    closeD.addEventListener("click",() => myD.close());

    function displayItems(info){
    info.forEach(x => {

        const div=document.createElement("div")
        
        const portrait=document.createElement("figure")
        const photo=document.createElement("img")
    
        
        photo.src=x.src
        photo.alt=x.alt
        
        portrait.appendChild(photo)
        div.appendChild(portrait)

        div.classList.add("card")
        divp.appendChild(div)

        photo.addEventListener("click", ()=>{
            photo.classList.toggle("animate");
        });
        
       
    });
        
    }
displayItems(images);

/*function knowMore(x)
{
     myD.showModal()
    
    myD.innerHTML=`
    <button id="closeDialog">❌</button>
    <h2> ${x.name} </h2>
    <address> ${x.address}
    <p> ${x.cost}
    `
   const closeD=document.querySelector("#closeDialog")
    closeD.addEventListener("click", () => {
    myD.close();
  });
}


const visitsDisplay=document.querySelector("#numVisits")
const msToDays=86400000
let storedValue=localStorage.getItem("numVisits-ls");
let lastVisit=localStorage.getItem("lastVisit")
let numVisits;

if (storedValue===null){
    numVisits=0
}
else {numVisits=Number(storedValue)
}

const now=new Date();
let message=""

if(lastVisit===null){
    message="This is your first visit"
}
else{
    const last=new Date(lastVisit)
    const differenceMs=now-last
    const differenceDays=Math.floor(differenceMs/msToDays)

    if (differenceMs<msToDays){
        message=`"Back so soon! Awesome! Your last visit was ${last}"`
        console.log(numVisits)
    }
    else{
        message=`You last visited us ${last}, ${differenceDays} days ago.`
        console.log(numVisits)
    }}
    visitsDisplay.textContent=message
    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits)
    localStorage.setItem("lastVisit", now.toISOString());
*/