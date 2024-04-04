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

//Dichiaro una variabile e richiamo la funzione "randomCpuNum" per la generazione di un numero casuale della CPU
let random = randomCpuNum()

// Somma tra il numero utente e quello della CPU
let sum = random + userNum
console.log(`Il risultato numerico tra la somma dei due numeri è di:`, sum);
