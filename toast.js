
const toastTopShow = document.querySelector('.toast-top-show-btn');
const toastBottomShow = document.querySelector('.toast-bottom-show-btn');

toastTopShow.addEventListener('click', ()=>{
    const toast = document.getElementById('toast-top');
    toast.classList.add('show-top');

    setTimeout(()=> toast.classList.remove('show-top'), 4000);
})


toastBottomShow.addEventListener('click', ()=>{
    const toast = document.getElementById('toast-bottom');
    toast.classList.add('show-bottom');

    setTimeout(()=> toast.classList.remove('show-bottom'), 4000);
})

// toastShow.addEventListener('click', ()=>console.log("toast btn clicked"))