
const getString=window.location.search;
console.log(getString);

const myInfo=new URLSearchParams(getString);

const formInfo=document.querySelector("#thankyou")
formInfo.innerHTML=`
    <p>Thank you, ${myInfo.get("firstname")} ${myInfo.get("lastname")}</p>
    <p>for joining Cordoba Chamber of Commerce.</p>
    <p>This is the information you provided: </p>
    <p>Title: ${myInfo.get("title")}</p>
    <p>Organization: ${myInfo.get("organization")}</p>
    <p>Email: ${myInfo.get("email")}</p>
    <p>Cellphone: ${myInfo.get("cellphone")}</p>
    <p>Membership selection: ${myInfo.get("membership-select")}</p>
        `

/*firstname=florencia&lastname=taravella&title=directora&email=florenciataravella%40gmail.com&cellphone=%2B543513057171&organization=bunibliss&membership-select=np*/