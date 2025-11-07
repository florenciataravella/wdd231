const url="https://florenciataravella.github.io/wdd231/memberinfo.json";

async  function getMembersInfo(){
    try{
        const response=await fetch(url);
        const data=await response.json;
        return data.companies;
    }
    catch(error){
        console.error("Error:",error);
    }
}
async function init(){
    const members=await getMembersInfo();
    
}