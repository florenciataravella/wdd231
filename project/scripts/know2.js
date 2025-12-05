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

console.log(data.features)
       //return data.features;    //array js

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
            photo.classList.toggle("animate");
        });
        
       
    });
        
    }
/*displayItems(images);


function displayGymPictures(members){
    let goldSilverMembers=members.filter(m=>m.membership==="silver"||m.membership==="gold");
    
    

    for(let i=0; i<3; i++){ 
        let randomN=goldSilverMembers.length;
    let randonNN=Math.floor(Math.random()*randomN);
    
    console.log(randomN);
    console.log(randonNN)
    
        
        let card=document.createElement("section");
        let name=document.createElement("p");
        let address=document.createElement("p");
        let phone=document.createElement("p");
        let weburl=document.createElement("p");
        let mship=document.createElement("p");
        let portrait=document.createElement("img");
        
        name.textContent=goldSilverMembers[randonNN].name;

        address.textContent=goldSilverMembers[randonNN].address;
        phone.textContent=goldSilverMembers[randonNN].phone;
        weburl.textContent=goldSilverMembers[randonNN].weburl;
        mship.textContent=goldSilverMembers[randonNN].membership;
        portrait.setAttribute("src",goldSilverMembers[randonNN].image);
        portrait.setAttribute("alt",`Logo of ${goldSilverMembers[randonNN].name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width","150");
        portrait.setAttribute("height","150");
        portrait.setAttribute("loading","lazy");

        card.appendChild(name);
        name.classList.add("name");
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(weburl);
        weburl.classList.add("web");
        card.appendChild(mship);
        card.appendChild(portrait);
        portrait.classList.add("portrait");


        card.classList.add("cards");
        spotlightMembers.appendChild(card);
        goldSilverMembers.splice(randonNN, 1);
        
    }
      }*/
        
/*async function init(){
    const details=await getPicturesInfo();
    displayItems(details);
}
init();*/
async function init(){
    getPicturesInfo()
    
}
init();
