
let menu = document.getElementById("side-nav");

const openModalBtns = document.querySelectorAll('[data-modal-target]')
const closeModalBtns = document.querySelectorAll('[data-close-btn]')
const overlay = document.getElementById('overlay')


openModalBtns.forEach(button => {
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })
})

closeModalBtns.forEach(button => {
    button.addEventListener('click', ()=>{
        const modal = button.closest('modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modal.active')

    modals.forEach(modal =>{
        closeModal(modal);
    })
})

function openModal(model){
    if(modal === null) return 

    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(model){
    if(modal === null) return 

    modal.classList.remove('active')
    overlay.classList.remove('active')
}

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


