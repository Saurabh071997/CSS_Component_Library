
let menu = document.getElementById("side-nav");

function openMenu(){
    menu.style.width = "270px";
    // document.getElementById("flex-class").style.filter="brightness(50%)";
    // document.getElementById("flex-class").style.backgroundColor="#78716C";
   
}

function closeMenu(){
    menu.style.width = "0px";
    // document.getElementById("flex-class").style.filter="brightness(1)";
    // document.getElementById("flex-class").style.backgroundColor="white";
}




document.querySelector(".open-icon")
.addEventListener("click", openMenu);

document.querySelector(".close-icon")
.addEventListener("click", closeMenu);

document.querySelector(".fab").addEventListener("click", function(){
    document.querySelector(".box").classList.toggle("box-active");
})


