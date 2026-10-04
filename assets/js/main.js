
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".menu-dark-light-mode-icon")

const savedTheme = localStorage.getItem('theme');

if (savedTheme == 'dark') {
    
document.documentElement.classList.add('dark-theme')
   themeIcon.src = "assets/images/icons/sun.png"

}


themeToggle.addEventListener('click', () => {

const theme = document.documentElement.classList.toggle("dark-theme")

if (theme) {
    
localStorage.setItem('theme', 'dark')
themeIcon.src = "assets/images/icons/moon.png"

}

else{

localStorage.setItem('theme', 'light')
themeIcon.src = "assets/images/icons/sun.png"

}

})


