let div = document.getElementById("div");

div.addEventListener("click", function(){
    alert("Hola! Soy el div");
});

let btn = document.getElementById("btn");

btn.addEventListener("click", function(event){
    event.stopPropagation();
});