import { footer } from "./footer_navigation.mjs";
import { navigation } from "./footer_navigation.mjs";

import { services } from "../data/services.js";

navigation();
footer();

const persbtn=document.querySelector("#pers-btn")
const selfbtn=document.querySelector("#selfg-btn")
const coachedbtn=document.querySelector("#coachedclass-btn")
const otherbtn=document.querySelector("#other-btn")
const trainingdetails=document.querySelector("#training-details")

persbtn.addEventListener("click",()=>{
    const personalized=services.filter(service=>service.id=="personalized-training");
    displayMembershipDetails(personalized)
})
selfbtn.addEventListener("click",()=>{
    const selfguided=services.filter(service=>service.id=="self-guided-training");
    displayMembershipDetails(selfguided)
})
coachedbtn.addEventListener("click",()=>{
    const coached=services.filter(service=>service.id=="coach-led-classes");
    displayMembershipDetails(coached)
})
otherbtn.addEventListener("click",()=>{
    const other=services.filter(service=>service.id=="glutes-core-sculpt");
    displayMembershipDetails(other)
})
document.querySelector(".join-form").addEventListener("submit", () => {
  const now = new Date().toISOString();
  document.querySelector("#timestamp").value = now;
});

function displayMembershipDetails(services) {
    services.forEach(service => {
        
  trainingdetails.innerHTML = '';

  trainingdetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${service.title} member </h2>
    <h3> We offer you 👇: <h3>
    <p>Description:${service.description}</p>
    <p>Time availability:${service.timeAvailability}</p>
    <h5>Features:</h5>
    <p>${service.features}</p>
    <h5>Cost: ${service.price}</h5>
    <p> Suitable for: ${service.suitableFor}
  `;
   });
  trainingdetails.showModal();
  
  closeModal.addEventListener("click", () => {
    trainingdetails.close();
  });

}
 