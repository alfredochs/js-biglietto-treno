const numeroKm = parseInt(prompt("Quanti km vuoi percorrere oggi?"))
const etaPassegero = parseInt(prompt("Quanti anni hai?"))
const prezzoBiglietto = numeroKm * 0.21
let scontoMinorenni
let scontoOver

if ((isNaN(numeroKm)) && (isNaN(etaPassegero))) {
    alert("I dati inseriti non sono corretti.")
} else { }

if (etaPassegero < 18) {
    scontoMinorenni = prezzoBiglietto * 20 / 100
    const prezzoScontoMinorenni = prezzoBiglietto - scontoMinorenni
    alert("Hai diritto ad uno sconto del 20%")
    alert("Il prezzo del viaggio Minorenni è: " + (prezzoScontoMinorenni).toFixed(2))
} else if (etaPassegero >= 65) {
    scontoOver = prezzoBiglietto * 40 / 100
    const prezzoScontoOver = prezzoBiglietto - scontoOver
    alert("Hai diritto d uno scondo del 40%")
    alert("Il prezzo del viaggio Over 65 è: " + (prezzoScontoOver).toFixed(2))
} else {
}