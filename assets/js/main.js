
const themeToggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem('theme');

if (savedTheme == 'dark') {
    
document.documentElement.classList.add('dark-theme')


}


themeToggle.addEventListener('click', () => {

const theme = document.documentElement.classList.toggle("dark-theme")

if (theme) {
    
localStorage.setItem('theme', 'dark')
    
}

else{

localStorage.setItem('theme', 'light')

}

})


