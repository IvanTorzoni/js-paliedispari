/**
 * Descrizione : Generare un numero randomico da 1 a 5 per la cpu
 * @returns {number}
 */

// Creo la funzione per la generazione del numero random
function randomCpuNum() {
    // Genero il numero casuale da 1 a 5
    const cpuNum = Math.floor(Math.random() * 5) + 1;

    //log alla console
    console.log(`Il numero generato dalla CPU è:`, cpuNum);

    // Restituisco il numero generato nella funzione
    return cpuNum
}

/**
 * Descrizione : Eseguo la somma tra i due numeri e stampo il risultato come stringa
 * @param {number} sumNumber
 * @returns {string}
 */

// Creo la funzione per la generazione del tipo di risultato (pari o dispari)
function sumOdd(sumNumber) {
    // creo una variabile di appoggio
    let result = ""

    // Se il numero sommato è divisibile per due e non da resto
    if (sumNumber % 2 === 0) {

        //il risultato sarà pari
        result = "pari"

        // log alla console
        console.log(`Il risultato della somma tra i due numeri ha stabilito che è:`, "pari");

        // Restituisco il numero generato nella funzione
        return result

        // altrimenti
    } else {

        //il risultato sarà dispari
        result = "dispari"

        // log alla console
        console.log(`Il risultato della somma tra i due numeri ha stabilito che è:`, "dispari");
        // Restituisco il numero generato nella funzione
        return result
    }

}
