import { footer } from "./footer_navigation.mjs";
import { navigation } from "./footer_navigation.mjs";

//import { services } from "../data/services";

navigation();
footer();
const joinbtn=document.querySelector("#join-btn")

joinbtn.addEventListener("click", ()=>{
    window.location.href="https://florenciataravella.github.io/wdd231/project/record-join"
})
