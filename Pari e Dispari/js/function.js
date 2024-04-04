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
