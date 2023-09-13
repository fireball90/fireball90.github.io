var light = "css/style.css";
var dark = "css/dark.css";

function changeFunction(){
    var isChecked = document.getElementById("switch").checked;

    if (isChecked == true){
        localStorage.setItem('darkmode','false')
    }else{
        localStorage.setItem('darkmode','true')
    }
    changeMode()
}

function changeMode(){
    var darkMode = localStorage.getItem('darkmode');

    if (darkMode == "true"){        
        document.getElementById('stylesheet').href=dark;
    }else{
        document.getElementById('stylesheet').href=light;
    }
}


window.onload=function check(){
    var isDark = localStorage.getItem('darkmode');

    if (isDark == "true"){
        document.getElementById("switch").checked = false;
        changeMode()
    }else{
        document.getElementById("switch").checked = true;
        changeMode()
    }
}