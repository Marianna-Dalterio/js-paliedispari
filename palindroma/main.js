//Chiedere all’utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola")
//Creare una funzione per capire se la parola inserita è palindroma

//ciclo for per analizzare caratteri di una parola da sx-dx e viceversa
let parolaSxDx = []
for (let i = 0; i < parolaUtente.length; i++) {
    caratteriSxDx = parolaUtente[i]
    //console.log(caratteriSxDx)
}
let parolaDxSx = []
for (let i = parolaUtente.length - 1; i >= 0; i--) {
    caratteriDxSx = parolaUtente[i]
    //console.log(caratteriDxSx)
}

//condizione per confronto
let parolaPalindroma = caratteriSxDx === caratteriDxSx
if (parolaPalindroma) {
    console.log("La tua parola E' palindroma")
} else {
    console.log("La tua parola NON è palindroma")
}

//racchiudo in una funzione
function parola_palindroma(parolaUtente) {
    const result = parolaPalindroma
    console.log(result)
    return result
}