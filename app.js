// initialize variables
const menu = document.getElementById('menu')
const hambuger = document.getElementById('hambuger')
const times = document.getElementById('times')


function showMenu() {
    menu.classList.toggle("hidden")
    hambuger.style.display = "none"
    times.style.display = "flex"
} 

function hideMenu() {
    menu.classList.toggle("hidden") 
    times.style.display = "none"
    hambuger.classList = "flex"
} 









