// Dichiarazione parametro da passare alla funzione con controllo
let word =''
do {
    word = prompt('Inserisci una parola').trim()

 if (!word || !isNaN(word)) alert('Attenzione! inserire correttamente una parola!')
} while (!word || !isNaN(word));

// Funzione che determina se una parola data in input è palindroma
function palindroma(word) {
    let reversedWord = ''

    for (let i = word.length - 1; i >= 0 ; i--) {
        reversedWord += word[i]
    }

    // Ternario condizioni
    word === reversedWord ? alert(`La parola: ${word} è palindroma`) : alert(`La parola: ${word} non è palindroma`)
    console.log(reversedWord)
}

palindroma(word)


