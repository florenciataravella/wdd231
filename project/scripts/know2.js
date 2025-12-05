const url="https://florenciataravella.github.io/wdd231/project/data/gym-pictures.json";

const divp=document.querySelector(".gym-pictures")
const myD=document.querySelector("#myDialog")
const closeD=document.querySelector("#closeDialog")



import { footer } from "./footer_navigation.mjs";
import { navigation } from "./footer_navigation.mjs";

//import { images } from "../data/gym-pictures.js";


navigation();
footer();

 async  function getPicturesInfo(){
    try{
        const response=await fetch(url);
        const data=await response.json();

       return data.features;    //array js

    }
    catch(error){
        console.error("Error:",error);
    }
}   
    
    
    closeD.addEventListener("click",() => myD.close());

    function displayItems(info){
    info.forEach(x => {

        const div=document.createElement("div")
        
        let portrait=document.createElement("figure")
        let photo=document.createElement("img")
        let name=document.createElement("p");
        let description=document.createElement("p");
        let src=document.createElement("p");
        let category=document.createElement("p");
        let difficulty=document.createElement("p");
        
      
        name.innerHTML=x.title
        description.innerHTML=x.description
        category.innerHTML=x.category
        difficulty.innerHTML=x.difficulty

        photo.setAttribute("src",x.src);
        photo.setAttribute("alt",x.description);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width","150");
        photo.setAttribute("height","150");
        photo.setAttribute("loading","lazy");
        
        portrait.appendChild(photo)
        div.appendChild(portrait)
        div.appendChild(name,description,category,difficulty)

        div.classList.add("card")
        divp.appendChild(div)

        photo.addEventListener("click", ()=>{
            showMore(x)
        
    
            
        });
        
       
    });
        
    }
    async function init(){
    const details=await getPicturesInfo();
    displayItems(details);

    }
    init();


    function showMore(item){
    
{
     myD.showModal()
    
    myD.innerHTML=`
    <button id="closeDialog">❌</button>
    <h2> ${item.title} </h2>
    <p> ${item.description}</p>
    <p> ${item.difficulty}</p>
    <p><p> ${item.category}</p>
    `
   const closeD=document.querySelector("#closeDialog")
    closeD.addEventListener("click", () => {
    myD.close();
  });
}


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


        

/*async function init(){
    getPicturesInfo()
    
}
init();*/
