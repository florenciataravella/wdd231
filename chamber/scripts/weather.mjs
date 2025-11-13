const myTemperature=document.querySelector("#temperature");
const myGraphic=document.querySelector("#graphic");
const myDescription=document.querySelector("#description");
const myTown=document.querySelector("#town");
const myLat=49.78535752010345;
const myLon=6.64624325323252;
const myAppid="bd71289a4fe39f7ed1731bd8cc928641";
/*http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bd71289a4fe39f7ed1731bd8cc928641*/
const url=`//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myAppid}&units=imperial`

async function apiFetch() {
    try{
        const response=await fetch(url);
        if(response.ok){
        const data=await response.json();
        console.log(data);
        displayResults(data);
        }
    else {
        throw Error (await response.text());
    }
    } catch (error){
        console.log(error);
    }  
};
apiFetch();
function displayResults(data){
    console.log("hello");
    myTown.innerHTML=data.name
    myDescription.innerHTML=data.weather[0].description
    myTemperature.innerHTML=`${data.main.temp}&deg;F`
    const iconSrc=`//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute("SRC",iconSrc);
    myGraphic.setAttribute("alt", data.weather[0].description);   
}
0