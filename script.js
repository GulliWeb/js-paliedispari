// Dichiarazione parametro da passare alla funzione 
let word = ''

// Funzione che determina se una parola data in input è palindroma 
function palindroma() {
    let mes = ''

    word = document.getElementById('txtPal').value.trim().toLowerCase()

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
    word === reversedWord ? mes = (`La parola: ${word} è palindroma`) : mes = (`La parola: ${word} non è palindroma`)
    console.log(reversedWord)
    document.getElementById('resultPal').innerText = mes
}



// SNACK 2

// Dichiarazione funzione e raccolta input utente
function pariDispari(choose_f, userNumber_f) {
    console.log(choose_f, userNumber_f);
    let somma = 0;
    const rnd = Math.floor(Math.random() * 5) + 1; // generare un numero casuale tra 1 e 5
    console.log("Il numero random generato è: " + rnd);

    somma = rnd + userNumber_f;
    console.log("La somma è: " + somma);

    let res = document.getElementById('result') 
    let mess 

    // Controlli per stabilire il vincitore
    if (somma % 2 === 0 && choose_f === 'pari') {
        mess = `Il giocatore ha vinto! La somma: ${somma} è pari!`;
    } else if (somma % 2 !== 0 && choose_f === 'dispari') {
       mess = `Il giocatore ha vinto! La somma: ${somma} è dispari!`;
    } else if (somma % 2 === 0 && choose_f === 'dispari') {
        mess = (`Il giocatore ha perso! La somma: ${somma} è pari!`);
    } else if (somma % 2 !== 0 && choose_f === 'pari') {
        mess = (`Il giocatore ha perso! La somma: ${somma} è dispari!`);
    }
    console.log(choose_f, userNumber_f);
    res.innerText = mess
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