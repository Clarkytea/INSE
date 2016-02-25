document.getElementById("menubtn").addEventListener("click", function(){
    var Button = document.getElementById("Menu"), Height = "100px";
    if (Button.style.height == Height) {
        Button.style.height = "0px";
    }
    else {
      Button.style.height = Height;
    }
});