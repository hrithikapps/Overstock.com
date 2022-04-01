import navbar from "../components/navbar.js";
let header = document.getElementById("header");

header.innerHTML = navbar();




let drop1 = document.getElementById("drop1");
let drop2 = document.getElementById("drop2");
let drop3 = document.getElementById("drop3");
let drop4 = document.getElementById("drop4");
let drop5 = document.getElementById("drop5");
let drop6 = document.getElementById("drop6");
let drop7 = document.getElementById("drop7");
let drop8 = document.getElementById("drop8");
let drop9 = document.getElementById("drop9");
let drop10 = document.getElementById("drop10");
let drop11 = document.getElementById("drop11");
let drop13 = document.getElementById("drop13");

let drop_1 = document.getElementById("drop_1");
let drop_2 = document.getElementById("drop_2");
let drop_3 = document.getElementById("drop_3");
let drop_4 = document.getElementById("drop_4");
let drop_5 = document.getElementById("drop_5");
let drop_6 = document.getElementById("drop_6");
let drop_7 = document.getElementById("drop_7");
let drop_8 = document.getElementById("drop_8");
let drop_9 = document.getElementById("drop_9");
let drop_10 = document.getElementById("drop_10");
let drop_11 = document.getElementById("drop_11");
let drop_13 = document.getElementById("drop_13");




drop1.addEventListener("mouseenter", () => {
    drop1.style.color="black";
    
    drop_1.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";

})

drop_1.addEventListener("mouseleave", () => {
    drop_1.style.visibility = "hidden";
    // drop1.style.textDecoration="none";
})

drop2.addEventListener("mouseenter", () => {
    drop_2.style.visibility = "visible";
    drop_1.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_2.addEventListener("mouseleave", () => {
    drop_2.style.visibility = "hidden";
})

drop_3.addEventListener("mouseenter", () => {
    drop_3.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_3.addEventListener("mouseleave", () => {
    drop_3.style.visibility = "hidden";
})

drop4.addEventListener("mouseenter", () => {
    drop_4.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_4.addEventListener("mouseleave", () => {
    drop_4.style.visibility = "hidden";
})

drop5.addEventListener("mouseenter", () => {
    drop_5.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_5.addEventListener("mouseleave", () => {
    drop_5.style.visibility = "hidden";
})

drop6.addEventListener("mouseenter", () => {
    drop_6.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_6.addEventListener("mouseleave", () => {
    drop_6.style.visibility = "hidden";
})

drop7.addEventListener("mouseenter", () => {
    drop_7.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_7.addEventListener("mouseleave", () => {
    drop_7.style.visibility = "hidden";
})

drop8.addEventListener("mouseenter", () => {
    drop_8.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_8.addEventListener("mouseleave", () => {
    drop_8.style.visibility = "hidden";
})

drop9.addEventListener("mouseenter", () => {
    drop_9.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_9.addEventListener("mouseleave", () => {
    drop_9.style.visibility = "hidden";
})

drop10.addEventListener("mouseenter", () => {
    drop_10.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_10.addEventListener("mouseleave", () => {
    drop_10.style.visibility = "hidden";
})

drop11.addEventListener("mouseenter", () => {
    drop_11.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_11.addEventListener("mouseleave", () => {
    drop_11.style.visibility = "hidden";
})

drop13.addEventListener("mouseenter", () => {
    drop_13.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
})




drop_13.addEventListener("mouseleave", () => {
    drop_13.style.visibility = "hidden";
})

import footer from "../components/footer.js";
    let foot=document.getElementById("footer");
    foot.innerHTML=footer();
    console.log(footer)

