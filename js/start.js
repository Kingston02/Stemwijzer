// alle vars
var firstContainer = document.getElementById("first-container");
var secondContainer = document.getElementById("second-container");
var thirdContainer = document.getElementById("third-container");
var imp_container = document.getElementById("imp-container");
var logo = document.getElementById("logo");
var quot = document.getElementById("quot");
var blik = document.getElementById("blik");
var par_txt = document.getElementById("par-txt");
var overslaan = document.getElementById("overslaan");
var uitleg = document.getElementById("statement");
var btnNext = document.getElementById("btn-next");
var btnNext2 = document.getElementById("btn-next2");
var btnNext3 = document.getElementById("btn-next3");
var infoPlace = document.getElementById("info-place");
var infoPlace2 = document.getElementById("info-place2");
var partij_aantal = parties.length;
var loopCount = partij_aantal - 1;
var eens_score = 0;
var vraag = 1;

// zet alle partijen in de sessie
for (var i = 0; i < partij_aantal; i++) {
    var naam = subjects[0].parties[i].name;
    sessionStorage.setItem(naam, eens_score);
}


// start function
    function start(){
    var secularParties = [];
    var groteParties = [];

    for (var p = 0; p < partij_aantal; p++) {

        var nameSecular = parties[p].name;
        var secular = parties[p].secular;
        
        if(secular == true){
            secularParties.push(nameSecular);
        }
    }

    for (var p = 0; p < partij_aantal; p++) {

        var nameSecular = parties[p].name;
        var grote = parties[p].size;
        
        if(grote > 0){
            groteParties.push(nameSecular);
        }
    }

    console.log(groteParties);

    //secondContainer.style.display = "none";
    blik.innerHTML = 'Wat vinden de partijen?';
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
    btnNext.innerHTML = '<h3>Eens</h3>';
    overslaan.style.display = 'inline';
    infoPlace.style.display = 'none';
    par_txt.style.display = 'none';
    infoPlace2.style.display = 'none';
    btnNext2.style.display = 'inline';
    btnNext3.style.display = 'inline';
    if(vraag >= 29){
        btnNext.onclick = function() {eindKeuze()};
    }
    btnNext.onclick = function() {eens()};
}

// volgende statement
function next(){
    vraag += 1;
    
    if(vraag >= 30){
        eindKeuze();
    } else {
        quot.innerHTML = vraag+'. '+subjects[vraag].title;
        uitleg.innerHTML = subjects[vraag].statement;
    }
}

// eens statement
function eens(){
    for (var k = 0; k < loopCount; k++) {
        var positie = subjects[vraag].parties[k].position;
        if(positie == 'pro'){
            var naam = subjects[vraag].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) + 1;
            sessionStorage.setItem(naam, new_score);
        } else {
            var naam = subjects[vraag].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) - 1;
            sessionStorage.setItem(naam, new_score);
        }
    }
    next();
}

// geen statement
function geen(){
    for (var k = 0; k < loopCount; k++) {
        var positie = subjects[vraag].parties[k].position;
        if(positie == 'none'){
            var naam = subjects[vraag].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) + 1;
            sessionStorage.setItem(naam, new_score);
        } else {
            var naam = subjects[vraag].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) - 1;
            sessionStorage.setItem(naam, new_score);
        }
    }
    next();
}

// oneens statement
function oneens(){
    for (var k = 0; k < loopCount; k++) {
        var positie = subjects[vraag].parties[k].position;
        if(positie == 'contra'){
            var naam = subjects[vraag].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) + 1;
            sessionStorage.setItem(naam, new_score);
        } else {
            var naam = subjects[vraag].parties[k].name;
            var eens_score = sessionStorage.getItem(naam);
            var new_score = eval(eens_score) - 1;
            sessionStorage.setItem(naam, new_score);
        }
    }
    next();
}

// laat de belangrijke punten zien
function eindKeuze(){
    quot.innerHTML = 'Zijn er onderwerpen die u extra belangrijk vindt?';
    uitleg.innerHTML = 'Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.';
    infoPlace2.style.display = 'none';
    btnNext2.style.display = 'none';
    btnNext3.style.display = 'none';
    btnNext.innerHTML = '<h3>Ga verder</h3>';
    btnNext.setAttribute( "onClick", "javascript: calc();" );
    btnNext.style.position = 'relative';
    blik.innerHTML = '<strong>Extra belangrijke onderwerpen</strong>';
    btnNext.style.right = '0px';
    overslaan.style.display = 'none';
    logo.style.display = 'none';
    secondContainer.style.height = "850px";

    for (let i = 1; i < vraag; i++) {

        var element2 = document.createElement("input");
        element2.type = "checkbox";
        element2.value = subjects[i].title;
        secondContainer.appendChild(element2);

        var x = document.createElement("LABEL");
        var t = document.createTextNode(subjects[i].title);
        x.setAttribute("for", "male");
        x.appendChild(t);
        secondContainer.appendChild(x);

        var x = document.createElement("BR");
        secondContainer.appendChild(x);
    }
}

// berekend belangrijke punten
function calc(){

    var selected = [];
    var chks = document.getElementsByTagName("INPUT");

    // Loop and push the checked CheckBox value in Array.
    for (var k = 0; k < chks.length; k++) {
        if (chks[k].checked) {
            selected.push(chks[k].value);
            for (let i = 1; i < vraag; i++) {
                if(subjects[i].title == chks[k].value){
                    for (var v = 0; v < loopCount; v++) {
                        var positie = subjects[v].parties[v].position;
                        if(positie == 'pro'){
                            var naam = subjects[v].parties[v].name;
                            var eens_score = sessionStorage.getItem(naam);
                            var new_score = eval(eens_score) + 1;
                            sessionStorage.setItem(naam, new_score);
                        } else {
                            var naam = subjects[v].parties[v].name;
                            var eens_score = sessionStorage.getItem(naam);
                            var new_score = eval(eens_score) - 1;
                            sessionStorage.setItem(naam, new_score);
                        }
                    }

                    for (var v = 0; v < loopCount; v++) {
                        var positie = subjects[v].parties[v].position;
                        if(positie == 'none'){
                            var naam = subjects[v].parties[v].name;
                            var eens_score = sessionStorage.getItem(naam);
                            var new_score = eval(eens_score) + 1;
                            sessionStorage.setItem(naam, new_score);
                        } else {
                            var naam = subjects[v].parties[v].name;
                            var eens_score = sessionStorage.getItem(naam);
                            var new_score = eval(eens_score) - 1;
                            sessionStorage.setItem(naam, new_score);
                        }
                    }

                    for (var v = 0; v < loopCount; v++) {
                        var positie = subjects[v].parties[v].position;
                        if(positie == 'contra'){
                            var naam = subjects[v].parties[v].name;
                            var eens_score = sessionStorage.getItem(naam);
                            var new_score = eval(eens_score) + 1;
                            sessionStorage.setItem(naam, new_score);
                        } else {
                            var naam = subjects[v].parties[v].name;
                            var eens_score = sessionStorage.getItem(naam);
                            var new_score = eval(eens_score) - 1;
                            sessionStorage.setItem(naam, new_score);
                        }
                    }
                    
                }
            }
        }
    }

    resultaat();

}

// knop terug
function back(){
    if(vraag == 1){
        localStorage.clear();
        location.reload();
    } else {
        vraag -= 1;
        quot.innerHTML = vraag+'. '+subjects[vraag].title;
        uitleg.innerHTML = subjects[vraag].statement;
    }
}

// laat resultaten zien
function resultaat(){

    var puntenEnd = [];
    var partijenArr = [];
    secondContainer.innerHTML = "";

    quot.innerHTML = 'Uw resultaten'; 
    uitleg.innerHTML = 'De partijen die het best bij u past.';
    btnNext.innerHTML = 'Grote';
    btnNext.style.display = 'none';
    btnNext2.style.display = 'none';
    btnNext3.style.display = 'none';
    infoPlace2.style.display = 'none';

    secondContainer.innerHTML = '<strong>Alle partijen</strong>';
    overslaan.style.display = 'none';
    logo.style.display = 'none';
    secondContainer.style.height = "950px";


    for(var j = 0; j < 23; j++) {
        var namen = Object.keys(sessionStorage)[j];
        var punten = Object.values(sessionStorage)[j];
        partijenArr.push(punten);
        partijenArr.push(namen);

        puntenEnd.push(partijenArr);
        var partijenArr = [];
        puntenEnd.sort(function(a,b){return b[0] - a[0]});

    }

    for (var i = 0; i < puntenEnd.length; i++) {
        var h = document.createElement("H4");
        var t = document.createTextNode(puntenEnd[i][1]);
        h.appendChild(t);
        secondContainer.appendChild(h);
    }

    var buttonGrote = document.createElement('button');
    buttonGrote.innerHTML = 'Grote';
    buttonGrote.onclick = groot();

    var buttonSeculiere = document.createElement('button');
    buttonSeculiere.innerHTML = 'Seculiere';
    buttonSeculiere.onclick = seculier();
    
}

function groot(){
    
    secondContainer.innerHTML = '<strong>Alle partijen</strong>';
    secondContainer.style.height = "950px";
    btnNext2.onclick = seculier();


    for(var j = 0; j < 23; j++) {
        var namen = Object.keys(sessionStorage)[j];
        var punten = Object.values(sessionStorage)[j];

        if(groteParties.includes(namen)){
            partijenArr.push(punten);
            partijenArr.push(namen);
            puntenEnd.push(partijenArr);
        }
        
        var partijenArr = [];
        puntenEnd.sort(function(a,b){return b[0] - a[0]});

    }

    for (var i = 0; i < puntenEnd.length; i++) {
        var h = document.createElement("H4");
        var t = document.createTextNode(puntenEnd[i][1]);
        h.appendChild(t);
        secondContainer.appendChild(h);
    }
}

function seculier(){
    
}