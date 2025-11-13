

const url="https://florenciataravella.github.io/wdd231/chamber/data/members.json";

const spotlightMembers=document.querySelector(".section2");
async  function getMembersInfo(){
    try{
        const response=await fetch(url);
        const data=await response.json();
        console.log(data.companies);
        return data.companies;

    }
    catch(error){
        console.error("Error:",error);
    }
}

/*function displayMembers(members){
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
        spotlightMembers.appendChild(card);
        
    });*/


function displayGoldSilverMembers(members){
    let goldSilverMembers=members.filter(m=>m.membership==="silver");
        /*member=>member.membership=="silver" || member.membership=="gold")*/
        goldSilverMembers.forEach(member=>{
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
        spotlightMembers.appendChild(card);
        spotlightMembers.append("p");
        })
        
    }

async function init(){
    const members=await getMembersInfo();
    displayGoldSilverMembers(members);
    /*console.log(displayGoldSilverMembers(members));*/
}
init();
