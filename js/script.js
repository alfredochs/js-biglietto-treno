// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi
//  sul prezzo). Questo richiederà un minimo di ricerca.



const numeroKm = prompt("Quanti km vuoi percorrere oggi?")
const etaPassegero = prompt("Quanti anni hai?")
const prezzoBiglietto = numeroKm * 0.21
let scontoMinorenni
let scontoOver

if (etaPassegero < 18) {
    scontoMinorenni = (prezzoBiglietto * 20 / 100)
    const prezzoScontoMinorenni = prezzoBiglietto - scontoMinorenni
    alert("Il prezzo del viagio è: " + (prezzoScontoMinorenni).toFixed(2))
} else if (etaPassegero >= 65) {
    scontoOver = prezzoBiglietto * 40 / 100
    const prezzoScontoOver = prezzoBiglietto - scontoOver
    alert("Il prezzo del viagio è: " + (prezzoScontoOver).toFixed(2))
} else { }


