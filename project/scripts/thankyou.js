const getString=window.location.search;
console.log(getString);

const myInfo=new URLSearchParams(getString);
const formInfo=document.querySelector("#thankyou")
formInfo.innerHTML=`
    <p>Thank you, ${myInfo.get("firstname")} ${myInfo.get("lastname")}</p>
    <p>for contacting us.</p>
    <p>This is the information you provided: </p>
    <p>Age: ${myInfo.get("age")}</p>
    <p>Email: ${myInfo.get("email")}</p>
    <p>Cellphone: ${myInfo.get("cellphone")}</p>
    <p>Membership selection: ${myInfo.get("interest-select")}</p>
    <p>Submission time: ${myInfo.get("timestamp")}
        `