
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// Chiedo all' utente di inserire una parola
const userRequest = prompt("Inserisci una parola e ti dirò se è palindroma o meno")
console.log(userRequest);

// Creo le mie variabili di appoggio
const word = ""
const wordReverse = ""
// Creo una variabile flag per il confronto degli elementi delle parole
let result = false


// Creo gli array. All'interno vado ad inserire le singole lettere della parola fornita dall'utente
const wordArray = []
const wordReverseArray = []
// Creo una condizione: 
// Se viene inserita una parola eseguo le operazioni all' interno...
if (userRequest !== "") {
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

    // creo un ciclo for per prendere le singole lettere della parola inverite 
    for (let i = userRequest.length - 1; i >= 0; i--) {
        // Associo le singole lettere alla variabile di appoggio
        let wordReverse = userRequest[i];
        //log alla console
        console.log(wordReverse);
        //pusho le lettete nell'array
        wordReverseArray.push(wordReverse);
        //log alla console
        console.log(wordReverseArray);
    }

    // Creo il ciclo for per confrontare le lettere presenti nei due array
    for (let i = 0; i < wordArray.length; i++) {
        // Se gli elementi dell'array word sono diversi da quelli dell'array reverse
        if (wordArray[i] === wordReverseArray[i]) {
            // porta la variabile flag da false a true
            result = true
        }
    }
    console.log(result);

    // Messaggio di output
    // se la variabile result è vera
    if (result === true) {
        //genera il messaggio seguente
        alert("La parola da te inserita è palindroma");
        // altrimenti
    } else {
        //genera il messaggio seguente
        alert("la parola da te inserita non è palindroma")
    }
    // ...Altrimenti genero un messaggio all'utente con la richiesta di inserire una parola
} else {
    alert("Si prega di inserire una parola");
}