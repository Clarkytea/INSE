
document.getElementById("btn").addEventListener("click", function(){
    var menuButton = document.getElementById("Login-menu"), dHeight = "100px";
    if (menuButton.style.height == dHeight) {
        menuButton.style.height = "0px";
    }
    else {
      menuButton.style.height = dHeight;
    }
});

document.getElementById("menubtn").addEventListener("click", function(){
    var Button = document.getElementById("Menu"), Height = "100px";
    if (Button.style.height == Height) {
        Button.style.height = "0px";
    }
    else {
      Button.style.height = Height;
    }
});


