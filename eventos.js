let clickdiv = document.getElementById("divporclick");
let saludarButton = document.getElementById("saludarButton");

saludarButton.addEventListener("click", function(event) {
    alert("Hola! Soy el botón");
    event.stopPropagation(); 
});

clickdiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
});
