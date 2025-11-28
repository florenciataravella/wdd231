
import { places } from "../data/places.mjs";

    

    const divp=document.querySelector("#placesCards")
    const myD=document.querySelector("#myDialog")
    const closeD=document.querySelector("#closeDialog")
    
    
    closeD.addEventListener("click",() => myD.close());

    function displayItems(info){
    info.forEach(x => {

        const div=document.createElement("div")
        const title=document.createElement("h2")
        const portrait=document.createElement("figure")
        const photo=document.createElement("img")
        const description=document.createElement("p")
        const button=document.createElement("button")
        
        title.innerHTML=x.name;
        div.appendChild(title)

        photo.src=x.photo_url
        photo.alt=x.name
        //photo.setAttribute("loading",lazy)
        portrait.appendChild(photo)
        div.appendChild(portrait)

        description.innerHTML=x.description
        div.appendChild(description)

        button.textContent="Know more"
        div.appendChild(button)
        div.classList.add("card")
        divp.appendChild(div)
        button.addEventListener("click",()=> knowMore(x))
    
    });
        
    }
displayItems(places);

function knowMore(x)
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
/*const visitsDisplay=document.querySelector("#numVisits")
let numVisits=Number(window.localStorage.getItem("numVisits-ls"))||0

if (numVisits!==0){
    visitsDisplay.textContent=`This is your ${numVisits} visit`
}
else{
    visitsDisplay.textContent="This is your first visit"
}

numVisits++;
localStorage.setItem("numVisits-ls",numVisits);*/

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
        message="Back so soon! Awesome!"
        console.log(numVisits)
    }
    else{
        message=`You last visited ${differenceDays} days ago.`
        console.log(numVisits)
    }}
    visitsDisplay.textContent=message
    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits)
    localStorage.setItem("lastVisit", now.toISOString());
