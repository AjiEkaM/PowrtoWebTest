const hamMenu = document.querySelector(".hamberger")
const navMenu = document.querySelector(".navHam")

hamMenu.addEventListener("click", ()=>{
    hamMenu.classList.toggle("active")
    navMenu.classList.toggle("active")
})