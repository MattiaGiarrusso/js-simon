// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 2) Richiamo l'elemento del Dom che mi servirà per stampare i messaggi all'utente in pagina
const listNum = document.getElementById('list-number');

// 3) creo gli array vuoti dei numeri casuali e di quelli ricordati dall'utente
let listRandomNum = [];
let listPromptNum = [];

// 4) creo un ciclo while per pushare 5 numeri random nell'array
while (listRandomNum.length<5) {
    let randomNum = genRandomNum(1, 100);
    console.log(randomNum);
    if (!listRandomNum.includes(randomNum)) {
        listRandomNum.push(randomNum);
    };
}
console.log(listRandomNum);
listNum.innerHTML = `Cerca di ricordare questi cinque numeri: ${listRandomNum}`;





//******************* FUNCTION GEN-RANDOM-NUM ************************* */

// 1) Inserisco la funzione che genera numeri random

function genRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}