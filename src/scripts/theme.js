/* Desenvolva sua lógica aqui ... */
const button = document.querySelector('.theme__button')
const body = document.body;
let darkMode = false;

function themeChange ( ) {
    darkMode = !darkMode
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", JSON.stringify(darkMode))
    if(darkMode){
        button.setAttribute('src', './src/assets/img/sun.svg');
    }else if (!darkMode){
        button.setAttribute('src', './src/assets/img/moon.svg');
    }

    
}

button.addEventListener("click", themeChange)

function themeAnalisys (){
    
    darkMode = JSON.parse(localStorage.getItem("theme"))
    if(darkMode){
        body.classList.add("dark-mode")
        button.setAttribute('src', './src/assets/img/sun.svg');

    }else if (!darkMode){
        button.setAttribute('src', './src/assets/img/moon.svg');
    }

}
themeAnalisys() 


