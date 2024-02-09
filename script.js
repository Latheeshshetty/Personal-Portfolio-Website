const burger=document.querySelector("#burger-menu");
const ul =document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", ()=>{ul.classList.toggle("show");} );

//select nav links
const navLink=document.querySelectorAll(".nav-link");

//close the hamburger when the link is clicked
navLink.forEach((link)=> link.addEventListener("click",()=>{ul.classList.remove("show");})
);



