
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// Chiedo all' utente di inserire una parola
const userRequest = prompt("Inserisci una parola e ti dirò se è palindroma o meno")
console.log(userRequest);

// Creo le mie variabili di appoggio
const word = ""

// Creo gli array. All'interno vado ad inserire le singole lettere della parola fornita dall'utente
const wordArray = []

// creo un ciclo for per prendere le singole lettere della parola
for (let i = 0; i < userRequest.length; i++) {
    // Associo le singole lettere alla variabile di appoggio
    let word = userRequest[i];
    //log alla console
    console.log(word);
    //pusho le lettete nell'array
    wordArray.push(word);
    //log alla console
    console.log(wordArray);
}

