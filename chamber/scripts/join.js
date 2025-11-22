
const levels= [
        {
            name:"Non-profit",
            cost:"free",
            communications:"✔️",
            invitations: "✔️",
            dirlisting:"Basic",
            trainings:"—",
            discounts: "—" ,
            smspotlights: "—" ,
            hpspotlights: "—" ,
            visibility: "—",
            seminars:"—",
            bussupport:"—"
        },
        
        {
           name:"Bronze",
            cost:"$",
            communications:"✔️",
            invitations: "✔️",
            dirlisting:"Enhanced",
            trainings:"✔️",
            discounts: "✔️",
            smspotlights:"—" ,
            hpspotlights: "—",
            visibility: "—",
            seminars:"—",
            bussupport:"—"
        },
        {
            name:"Silver",
            cost:"$$",
            communications:"✔️",
            invitations: "✔️",
            dirlisting:"Enhanced",
            trainings:"✔️",
            discounts: "Extra",
            smspotlights: "✔️",
            hpspotlights: "Quarterly",
            visibility: "✔️",
            seminars:"Priority access",
            bussupport:"✔️"
        },
        {
            name:"Gold",
            cost:"$$$",
            communications:"✔️",
            invitations: "✔️",
            dirlisting:"Premium",
            trainings:"✔️",
            discounts: "Maximum",
            smspotlights: "Premium placement",
            hpspotlights: "Priority / Featured",
            visibility: "Premium placement",
            seminars:"VIP access",
            bussupport:"✔️"
        }
    
    ]

const npbtn=document.querySelector("#np-btn")
const bronzebtn=document.querySelector("#bronze-btn")
const silverbtn=document.querySelector("#silver-btn")
const goldbtn=document.querySelector("#gold-btn")
const membershipdetails=document.querySelector("#membership-details")


/*async function getLevelsData(){
    try {
        const response=await fetch(membershipUrl);
        const data=await response.json();
        
        return levels=data.levels;   //JS array of levels
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
    
}
async function hola() {
    const levels=await getLevelsData();
    displayMembershipDetails(levels);
};
hola();
*/
npbtn.addEventListener("click",()=>{
    const nplevels=levels.filter(level=>level.name=="Non-profit");
    displayMembershipDetails(nplevels)
})
bronzebtn.addEventListener("click",()=>{
    const bronzelevels=levels.filter(level=>level.name=="Bronze");
    displayMembershipDetails(bronzelevels)
})
silverbtn.addEventListener("click",()=>{
    const silverlevels=levels.filter(level=>level.name=="Silver");
    displayMembershipDetails(silverlevels)
})
goldbtn.addEventListener("click",()=>{
    const goldlevels=levels.filter(level=>level.name=="Gold");
    displayMembershipDetails(goldlevels)
})
document.querySelector(".join-form").addEventListener("submit", () => {
  const now = new Date().toISOString();
  document.querySelector("#timestamp").value = now;
});

function displayMembershipDetails(levels) {
    levels.forEach(level => {
        
  membershipdetails.innerHTML = '';

  membershipdetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${level.name} member </h2>
    <h3> Benefits: <h3>
    <h4>Cost: ${level.cost}</h4>
    <p>Chamber communications:✔️</p>
    <p>Directory listing: <strong>${level.dirlisting}</strong</p>
    <p>Member-only events & trainings: ${level.trainings} </p>
    <p>Discounts on workshops & events: ${level.discounts}</p>
    <p> Social media spotlights: ${level.smspotlights}</p>
    <p> Homepage spotlights: ${level.hpspotlights}</p>
    <p> Increased visibility in newsletters: ${level.visibility}</p>
    <p>Exclusive seminars: ${level.seminars}</p>
    <p>Personalized business support: ${level.bussupport}</p>
  `;
   });
  membershipdetails.showModal();
  
  closeModal.addEventListener("click", () => {
    membershipdetails.close();
  });

}
