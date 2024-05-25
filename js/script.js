let htmlbutt = document.querySelector(".lang-button-html")
let cssbutt = document.querySelector(".lang-button-css")
let jsbutt = document.querySelector(".lang-button-js")
let zagol =document.querySelector(".zagolovok");
let img1 =zagol.querySelector("img");
let img2 =document.querySelector(".kartina img");
let htmltext= document.querySelector(".html-text");
let csstext =document.querySelector(".css-text");
let jstext = document.querySelector(".js-text");

cssbutt.onclick=function(){
    htmlbutt.classList.remove("active");
    jsbutt.classList.remove("active");
    cssbutt.classList.add("active");    
    zagol.classList.add("cssstyle");
    zagol.classList.remove("jsstyle");
    zagol.querySelector("h1").textContent="CSS3";
    img1.src = "img/css.png";
    img2.src = "img/css.jpg";
    htmltext.classList.add("hiden");
    csstext.classList.remove("hiden");
    jstext.classList.add("hiden");    
}
jsbutt.onclick=function(){
    htmlbutt.classList.remove("active");
    jsbutt.classList.add("active");
    cssbutt.classList.remove("active");    
    zagol.classList.remove("cssstyle");
    zagol.classList.add("jsstyle");
    zagol.querySelector("h1").textContent="JavaScript";
    img1.src = "img/js.jpg";
    img2.src = "img/js.png";
    htmltext.classList.add("hiden");
    csstext.classList.add("hiden");
    jstext.classList.remove("hiden");    
}
htmlbutt.onclick=function(){
    htmlbutt.classList.add("active");
    jsbutt.classList.remove("active");
    cssbutt.classList.remove("active");    
    zagol.classList.remove("cssstyle");
    zagol.classList.remove("jsstyle");
    zagol.querySelector("h1").textContent="HTML5";
    img1.src = "img/html5.jpg";
    img2.src = "img/pqzvkdbe_HTML5-Present-Past-and-Future.jpg";
    htmltext.classList.remove("hiden");
    csstext.classList.add("hiden");
    jstext.classList.add("hiden");    
}