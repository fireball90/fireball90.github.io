// DARK MODE / LIGHT MODE

function myFunction() {
    let darkMode = localStorage.getItem("darkMode")
    if (darkMode == "true") {
        localStorage.setItem("darkMode", "false")
    }
    else {
        localStorage.setItem("darkMode", "true")
    }
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function changeToDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function init() {
     let darkMode = localStorage.getItem("darkMode")
     console.log(darkMode)
     if (darkMode == null) {
         console.log("asd")
        localStorage.setItem("darkMode", "false")
     }
     else if (darkMode == "true") {
        changeToDark()
     }
 }

 document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    init()
});

// MENÜ

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }