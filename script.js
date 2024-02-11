//scroll up
const scrollUp =document.querySelector(".socion-up-arrow");

scrollUp.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
});

const burger=document.querySelector("#burger-menu");
const ul =document.querySelector("nav ul");
const _nav = document.querySelector("nav");

burger.addEventListener("click", ()=>{ul.classList.toggle("show");} );

//select nav links
const navLink=document.querySelectorAll(".nav-link");

//close the hamburger when the link is clicked
navLink.forEach((link)=> link.addEventListener("click",()=>{ul.classList.remove("show");})
);



