
let menu = document.getElementById("nav-menu");

function openMenu(){
    menu.style.top = "0";
}

function closeMenu(){
    menu.style.top = "-100vh";
}




document.querySelector(".open-icon")
.addEventListener("click", openMenu);

document.querySelector(".close-icon")
.addEventListener("click", closeMenu);

document.querySelector(".fab").addEventListener("click", function(){
    document.querySelector(".box").classList.toggle("box-active");
})


