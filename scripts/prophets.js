const url="https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards=document.querySelector("#cards");

async function getProphetData(){
    try {
        const response=await fetch(url);
        const data=await response.json();
        
        return prophets=data.prophets;   //JS array of prophets
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
    
}

function displayProphets(prophets) {
    
    prophets.forEach(prophet => {
        let card=document.createElement("section");
        let name=document.createElement("p");
        let birth=document.createElement("p");
        let place=document.createElement("p");
        let portrait=document.createElement("img");

        name.textContent=`${prophet.name} ${prophet.lastname}`;
        birth.textContent=prophet.birthdate;
        place.textContent=prophet.birthplace;
        portrait.setAttribute("src",prophet.imageurl);
        portrait.setAttribute("alt",`Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width","340");
        portrait.setAttribute("height",440);

        card.appendChild(name);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
    
}

async function hola() {
    const prophets=await getProphetData();
    displayProphets(prophets);
};
hola();


