const navbutton=document.querySelector("#ham-btn");
const navlinks=document.querySelector("#nav-bar");
navbutton.addEventListener("click",()=>{
    navbutton.classList.toggle("show");
    navlinks.classList.toggle("show");
})
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
});

const url="https://florenciataravella.github.io/wdd231/chamber/data/members.json";
const businessMembers=document.querySelector(".business-members");
async  function getMembersInfo(){
    try{
        const response=await fetch(url);
        const data=await response.json();
        return data.companies;
    }
    catch(error){
        console.error("Error:",error);
    }
}

function displayMembers(members){
    members.forEach(member=> {
        let card=document.createElement("section");
        let name=document.createElement("p");
        let address=document.createElement("p");
        let phone=document.createElement("p");
        let weburl=document.createElement("p");
        let portrait=document.createElement("img");

        name.textContent=member.name;
        address.textContent=member.address;
        phone.textContent=member.phone;
        weburl.textContent=member.weburl;
        portrait.setAttribute("src",member.image);
        portrait.setAttribute("alt",`Logo of ${member.name}`);
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
        card.appendChild(portrait);
        portrait.classList.add("portrait");


        card.classList.add("cards");
        businessMembers.appendChild(card);
        
    });
}
async function init(){
    const members=await getMembersInfo();
    displayMembers(members);
}
init();
const gridBtn=document.querySelector("#grid");
const listBtn=document.querySelector("#list");
const display=document.querySelector("article");

gridBtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});
listBtn.addEventListener("click", ()=>{
    display.classList.add("list");
    display.classList.remove("grid");
})
/*gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});
*/
