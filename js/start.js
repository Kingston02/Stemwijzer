var firstContainer = document.getElementById("first-container");
var secondContainer = document.getElementById("second-container");
var thirdContainer = document.getElementById("third-container");
var logo = document.getElementById("logo");
var quot = document.getElementById("quot");
var uitleg = document.getElementById("statement");
var btnNext = document.getElementById("btn-next");
var btnNext2 = document.getElementById("btn-next2");
var btnNext3 = document.getElementById("btn-next3");
var infoPlace = document.getElementById("info-place");
var infoPlace2 = document.getElementById("info-place2");
var partij_aantal = parties.length;
var eens_score = 0;
var vraag = 1;

for (var i = 0; i < partij_aantal; i++) {
    var naam = subjects[0].parties[i].name;
    sessionStorage.setItem(naam, eens_score);
}

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
    quot.innerHTML = vraag+'. '+subjects[0].title;
    uitleg.innerHTML = subjects[0].statement;
    btnNext.innerHTML = 'Eens';
    infoPlace.style.display = 'none';
    infoPlace2.style.display = 'none';
    btnNext2.style.display = 'inline';
    btnNext3.style.display = 'inline';
    btnNext.onclick = function() {eens()};
}

function eens(){
    for (var k = 0; k < partij_aantal; k++) {
        var positie = subjects[0].parties[k].position;
        if(positie == 'pro'){
            var naam = subjects[0].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) + 1;
            sessionStorage.setItem(naam, new_score);
        } else {
            var naam = subjects[0].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) - 1;
            sessionStorage.setItem(naam, new_score);
        }
    }
    next();
}

function oneens(){
    for (var k = 0; k < partij_aantal; k++) {
        var positie = subjects[0].parties[k].position;
        if(positie == 'contra'){
            var naam = subjects[0].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) + 1;
            sessionStorage.setItem(naam, new_score);
        } else {
            var naam = subjects[0].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) - 1;
            sessionStorage.setItem(naam, new_score);
        }
    }
    next();
}


function next(){
    quot.innerHTML = vraag+'. '+subjects[vraag].title;
    uitleg.innerHTML = subjects[1].statement;
    vraag += 1;
}