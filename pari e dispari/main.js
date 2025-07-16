//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let UserEvenOrOdd = prompt("Scegli pari o dispari")
let numeroUtente = Number(prompt("Inserisci un numero compreso tra 1 e 5"))
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numeroComputer = getRndInteger(1, 5);
console.log("Numero casuale", numeroComputer)
//Sommiamo i due numeri
sumNum = numeroUtente + numeroComputer
console.log("La somma è", sumNum)
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function IsSumEvenOrOdd(sumNum) {
    if (sumNum % 2 === 0) {
        return "La somma dei numeri è pari"
    } else {
        return "La somma dei numeri è dispari"
    }
}
console.log(IsSumEvenOrOdd(sumNum))
//Dichiariamo chi ha vinto.
