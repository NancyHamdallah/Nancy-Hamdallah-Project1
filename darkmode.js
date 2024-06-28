/*
console.log("DarkMode");
let darkMode = localStorage.getItem("darkMode");
*/
let darkMode = 0;

const darkModeToggle = document.querySelector("#dark-mode-toggle");
//check if darkmode enabled then turn it off
// if it's not enabled then turn it on
const enableDarkMode = () =>{
    document.body.classList.add("dark-mode");
    //localStorage.setItem('darkMode','enabled');
};
const disableDarkMode = () =>{
    document.body.classList.remove("dark-mode");
   // localStorage.setItem('darkMode',null);
};

darkModeToggle.addEventListener("click",()=>{
    if(darkMode == 0){
        enableDarkMode();
        darkMode=1;
    }
    else{
        disableDarkMode();
        darkMode=0;
    }

});