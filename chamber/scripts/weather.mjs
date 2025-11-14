export function weather(){

const myTemperature=document.querySelector("#temperature");
const myGraphic=document.querySelector("#graphic");
const myDescription=document.querySelector("#description");
const myTown=document.querySelector("#town");
const today=document.querySelector("#today");
const tomorrow=document.querySelector("#tomorrow");
const pasttomorrow=document.querySelector("#pasttomorrow");
const myLat=-31.41144092583835;
const myLon=-64.17670707491844;
const myAppid="bd71289a4fe39f7ed1731bd8cc928641";

/*http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bd71289a4fe39f7ed1731bd8cc928641*/
const url=`//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myAppid}&units=metric`
const urlForecast=`//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myAppid}&units=metric`

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
async function apiForecastFetch() {
    try{
        const response=await fetch(urlForecast);
        if(response.ok){
            const data=await response.json();
            console.log(data);
            displayForecastResults(data);

        }
        else {
            throw Error (await response.text());
        }
        } catch (error){
            console.log(error);
        }    
}

apiFetch();
apiForecastFetch();
function displayResults(data){
    console.log("hello");
    /*myTown.innerHTML=data.name*/
    myDescription.innerHTML=data.weather[0].description
    myTemperature.innerHTML=`${data.main.temp}&deg;F`
    const iconSrc=`//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute("SRC",iconSrc);
    myGraphic.setAttribute("alt", data.weather[0].description);   
}
function displayForecastResults(data){
    today.innerHTML=`${data.list[2].main.temp}&deg;C`;
    tomorrow.innerHTML=`${data.list[9].main.temp}&deg;C`;
    pasttomorrow.innerHTML=`${data.list[18].main.temp}&deg;C`;

}
}