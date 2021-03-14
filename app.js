
let menu = document.getElementById("nav-menu");

function openMenu(){
    menu.style.top = "0";
}

function closeMenu(){
    menu.style.top = "-100vh";
}

function show(){
    let list = document.getElementById("ul-list");
    // console.log(list.style.visibility);
    list.style.visibility = list.style.visibility==="hidden"? "visible" : "hidden";
}


document.querySelector(".open-icon")
.addEventListener("click", openMenu);

document.querySelector(".close-icon")
.addEventListener("click", closeMenu);

document.querySelector(".btn-fab").addEventListener("click", show);


