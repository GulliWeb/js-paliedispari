// // Dichiarazione parametro da passare alla funzione 
// let word = ''

// // Funzione che determina se una parola data in input è palindroma 
// function palindroma() {

//     word = document.getElementById('txtPal').value.trim().toLowerCase()

//     // Controllo campo parola dal DOM
//     if (!word || !isNaN(word)) {
//         alert('Attenzione! inserire correttamente una parola!')
//         return
//     }
        
//     let reversedWord = ''

//     for (let i = word.length - 1; i >= 0 ; i--) {
//         reversedWord += word[i]
//     }

//     // Ternario condizioni
//     word === reversedWord ? alert(`La parola: ${word} è palindroma`) : alert(`La parola: ${word} non è palindroma`)
//     console.log(reversedWord)
// }



// // SNACK 2 
// // Dichiarazione e raccolta di parametri
// let btnPlay = document.getElementById('btnPariDispari')
// btnPlay.addEventListener('click', function() {
// let userChoose = document.getElementById('slcOperator').value
// let choose

// // Controllo digitamento corretto scelta pari o dispari
// // if (userChoose !== 'pari' && userChoose !== 'dispari') {
// //     alert('Attenzione! scegliere correttamente tra "Pari" o "Dispari" !')
// // }

// // Assegnazione valore al parametro
// userChoose == 'pari' ? choose = userChoose : choose = 'dispari'
// console.log("L'utente ha scelto: " + choose)

// let userNumber = parseInt(document.getElementById('txtUserNumber')).value
// console.log("L'utente ha scelto il numero: " + userNumber)
    
// pariDispari(userChoose, userNumber)
// })


// function pariDispari(choose_f, userNumber_f) {
//     console.log(choose_f, userNumber_f)
//     let somma = 0 
//     const rnd = parseInt(Math.floor(Math.random() * 5) + 1)
//     console.log("Il numero random generato è: " + rnd)

//     somma = rnd + userNumber_f
//     console.log("La somma è: " + somma)

//     if (somma % 2 === 0 && choose_f == 'pari') {   
//         alert('Il giocatore ha vinto! la somma è pari')
//     } else if (somma % 2 !== 0 && choose_f == 'dispari' ) {
//         alert('Il giocatore ha vinto! il numero è dispri')
//     } else if (somma % 2 === 0 && choose_f == 'dispari') {
//         alert('Il giocatore ha perso! il numero è pari!')
//     } else if (somma % 2 !== 0 && choose_f == 'pari') {
//         alert('Il giocatore ha perso! il numero è dispari!')

//     }
//     console.log(choose_f, userNumber_f)
// }
function pariDispari(choose_f, userNumber_f) {
    console.log(choose_f, userNumber_f);
    let somma = 0;
    const rnd = Math.floor(Math.random() * 5) + 1; // generare un numero casuale tra 1 e 5
    console.log("Il numero random generato è: " + rnd);

    somma = rnd + userNumber_f;
    console.log("La somma è: " + somma);

    if (somma % 2 === 0 && choose_f === 'pari') {
        alert('Il giocatore ha vinto! La somma è pari');
    } else if (somma % 2 !== 0 && choose_f === 'dispari') {
        alert('Il giocatore ha vinto! La somma è dispari');
    } else if (somma % 2 === 0 && choose_f === 'dispari') {
        alert('Il giocatore ha perso! La somma è pari!');
    } else if (somma % 2 !== 0 && choose_f === 'pari') {
        alert('Il giocatore ha perso! La somma è dispari!');
    }
    console.log(choose_f, userNumber_f);
}

document.getElementById('btnPariDispari').addEventListener('click', function() {
    let userChoose = document.getElementById('slcOperator').value;
    let userNumber = parseInt(document.getElementById('txtUserNumber').value);

    // Validazione degli input
    if (userChoose !== 'pari' && userChoose !== 'dispari') {
        alert('Attenzione! Scegliere correttamente tra "Pari" o "Dispari"!');
        return;
    }

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert('Attenzione! Inserisci un numero valido tra 1 e 5.');
        return;
    }

    // Chiama la funzione pariDispari con i valori ottenuti
    pariDispari(userChoose, userNumber);
});