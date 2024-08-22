// Dichiarazione parametro da passare alla funzione 
let word = ''

// Funzione che determina se una parola data in input è palindroma 
function palindroma(word) {

    word = document.getElementById('txtPal').value

    // Controllo campo parola dal DOM
    if (!word || !isNaN(word)) {
        alert('Attenzione! inserire correttamente una parola!')
        return
    }
        
    let reversedWord = ''

    for (let i = word.length - 1; i >= 0 ; i--) {
        reversedWord += word[i]
    }

    // Ternario condizioni
    word === reversedWord ? alert(`La parola: ${word} è palindroma`) : alert(`La parola: ${word} non è palindroma`)
    console.log(reversedWord)
}



// SNACK 2 
// Dichiarazione e raccolta di parametri



