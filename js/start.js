var firstContainer = document.getElementById("first-container");
var secondContainer = document.getElementById("second-container");
var thirdContainer = document.getElementById("third-container");
var logo = document.getElementById("logo");
var quot = document.getElementById("quot");
var uitleg = document.getElementById("statement");
var btnNext = document.getElementById("btn-next");
var infoPlace = document.getElementsByClassName("info-place");



function start(){
    secondContainer.style.display = "none";
    thirdContainer.style.display = "none";
    logo.src = "img/arrow.png";
    logo.style.width = "20px";
    logo.style.position = 'relative';
    logo.style.marginTop = '0px';
    logo.style.marginLeft = '-50px';
    logo.style.marginTop = '-50px';
    quot.style.color = '#01b4dc';
    uitleg.style.color = 'black';
    quot.innerHTML = subjects[0].title;
    uitleg.innerHTML = subjects[0].statement;
    btnNext.innerHTML = 'Eens';
    infoPlace.style.display = 'none';
}