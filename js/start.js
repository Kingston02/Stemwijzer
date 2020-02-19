var firstContainer = document.getElementById("first-container");
var secondContainer = document.getElementById("second-container");
var thirdContainer = document.getElementById("third-container");
var logo = document.getElementById("logo");


function start(){
    secondContainer.style.display = "none";
    thirdContainer.style.display = "none";
    logo.src = "img/arrow.png";
    logo.style.width = "20px";
    logo.style.position = 'absolute';
    logo.style.marginTop = '0px';
    logo.style.marginLeft = '0px';
}