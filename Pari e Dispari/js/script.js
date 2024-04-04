// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Richiesta all' utente di scegliere pari o dispari
const userOdds = prompt("dimmi pari o dispari");
console.log(`La tua scelta tra pari e dispari è:`, userOdds);

// Richiesta all' utente di scegliere un numero compreso te 1 e 5
const userNum = parseInt(prompt("dimmi un numero da 1 a 5"));
console.log(`La scelta del tuo numero è:`, userNum);

// Impostiamo le condizioni per poter eseguire il codice:
// Se l'input è diverso da una stringa vuota e
// Se la stringa inserita dall' utente è pari o dispari e
// Se il numero inserito è un valore numerico e
// Se i numeri inseriti sono compresi tra il range di 1 e 5 allora
// Eseguo il codice...
if (userOdds !== "" && userOdds === "pari" && userOdds === "dispari" && isNaN(userNum) === false && userNum >= 1 && userNum <= 5) {

    //Dichiaro una variabile e richiamo la funzione "randomCpuNum" per la generazione di un numero casuale della CPU
    let random = randomCpuNum()

    // Somma tra il numero utente e quello della CPU
    let sum = random + userNum
    console.log(`Il risultato numerico tra la somma dei due numeri è di:`, sum);

    // Dichiaro una variabile e richiamo la funzione "sumOdd" per la generazione della stringa del risultato. Questa stringa verrà utilizzata per eseguire i vari output possibili
    const finalResult = sumOdd(sum)

    // Condizioni per l'output e la generazione del messaggio
    //Se l'utente ha scelto "pari" e il risultato della somma numerica è "pari" allora:
    if (userOdds === "pari" && finalResult === "pari") {

        //Stampa il messaggio seguente alla console
        console.log(`La tua scelta iniziale è stata : ${userOdds}. Il risultato finale è : ${finalResult}. Hai vinto`);

        //Altrimenti se l'utente ha scelto "dispari" e il risultato della somma numerica è "dispari" allora:
    } else if (userOdds === "dispari" && finalResult === "dispari") {

        //Stampa il messaggio seguente alla console
        console.log(`La tua scelta iniziale è stata : ${userOdds}. Il risultato finale è : ${finalResult}. Hai vinto`);

        //Altrimenti se nessuna delle due precedenti condizioni viene rispettata:
    } else {

        //Stampa il messaggio seguente alla console
        console.log(`La tua scelta iniziale è stata : ${userOdds}. Il risultato finale è : ${finalResult}. Hai perso`);
    }

    // ...Altrimenti mostro il seguente messaggio
} else {
    alert("E' stata inserita una parola o un valore diverso dalla richiesta fatta")
}

