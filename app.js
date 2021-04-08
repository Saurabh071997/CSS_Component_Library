
let menu = document.getElementById("side-nav");


function openMenu(){
    menu.style.width = "270px";
}

function closeMenu(){
    menu.style.width = "0px";
}



document.querySelector(".open-icon")
.addEventListener("click", openMenu);

document.querySelector(".close-icon")
.addEventListener("click", closeMenu);

document.querySelector(".fab").addEventListener("click", function(){
    document.querySelector(".box").classList.toggle("box-active");
})


