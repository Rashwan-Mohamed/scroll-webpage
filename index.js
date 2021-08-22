
date.innerHTML=new Date().getFullYear();
let toggle=document.querySelector(".nav-toggle");

let navbar=document.querySelector('.nav');

let linksContainer =document.querySelector(".links-container")

let link=document.querySelector(".links");

let topLink=document.querySelector(".top-link")

let scrollLinks=document.querySelectorAll(".scroll-link");


toggle.addEventListener("click",()=>{
let containerHeight=linksContainer.getBoundingClientRect().height;
let linksHeight=link.getBoundingClientRect().height;
// console.log(containerHeight);
// console.log(linksHeight);
if(containerHeight===0){
linksContainer.style.height=`${linksHeight}px`;
}
else{

linksContainer.style.height=0;
}
})


window.addEventListener('scroll',()=>{

let scrollHeight=window.pageYOffset;

if(scrollHeight> navbar.getBoundingClientRect().height){
navbar.classList.add("fixed-nav");
}
else{
navbar.classList.remove("fixed-nav");
}
if(scrollHeight>500){
topLink.classList.add("show-link")
}
else{
topLink.classList.remove("show-link")
}



})

// navbar height
// container height



scrollLinks.forEach((kink)=>{


kink.addEventListener('click',(e)=>{

    e.preventDefault();

let id=e.target.getAttribute('href').slice(1);

let element= document.getElementById(id);

let navheight=navbar.getBoundingClientRect().height;

let fixedNav=navbar.classList.contains("fixed-nav");
// console.log(navheight)

let containerHeight=linksContainer.getBoundingClientRect().height;

console.log(containerHeight)

let dis=element.offsetTop - navheight;

if(!fixedNav){

dis=dis-navheight;

}

if(navheight>82){

dis=dis+containerHeight;

}

// console.log(dis)


window.scrollTo (
{
left:0,
top:dis ,
}
)

linksContainer.style.height=0;


})




})

