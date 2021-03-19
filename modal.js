

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