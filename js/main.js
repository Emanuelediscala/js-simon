
// DEFINISCO VARIABILI 
let randomNumber = [];
// this.getRndnumber(1, 100);
// console.log(randomNumber);
let Generate = document.getElementById("GenerateRandom");
let spotNumber = document.getElementById("Numerigenerati");
let richiestadati = [];
let count = 0;
let quantitaGiuste = 0;
let numeriIndovinati = []
// FUNZIONE STARTO GENERA
Generate.addEventListener("click", function () {
    randomNumber = [];
    richiestadati = [];
    numeriIndovinati = [];
    getRndnumber(1, 100);
    spotNumber.innerText = randomNumber;
    setTimeout(Disappear, 30 * 1000);
    setTimeout(CicloDati, 30 * 1000);
})

// FUNZIONE PER NUMERO RANDOM
function getRndnumber(min, max) {
    for (let i = 1; i <= 5; i++) {
        randomNumber.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
}


// function Controllo Quantità e valori
function controlloQuantitàeValori() {
    for (let c = 0; c < randomNumber.length; c++) {
        for (let x = 0; x < richiestadati.length; x++) {
            if (richiestadati[x] === randomNumber[c]) {
                quantitaGiuste++;
                numeriIndovinati.push(richiestadati[x]);
            }
        }
    }
    if (quantitaGiuste > 0) {
        alert("Hai vinto e ne hai indovinate " + quantitaGiuste + " e i numeri sono: " + numeriIndovinati)
    }
    else {
        alert("Hai perso, unlucky")
    }
}


function Disappear() {
    spotNumber.innerText = "";
}

// FUNZIONE PER RICHIEDERE DATI TRAMITE PROMPT a TOT SECONDI
function CicloDati(min, max) {
    richiestadati = [];
    const clock = setInterval(function () {
        richiestadati.push(parseInt(prompt("Quali Numeri sono Stati visualizzati a schermo?")));
        count++;
        if (count === 5) {
            clearInterval(clock);
            controlloQuantitàeValori();
        }
    }, 3 * 1000);
}


