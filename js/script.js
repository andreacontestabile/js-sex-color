// 1. Chiediamo all'utente il suo nome (e salviamo in una variabile)
var nome = prompt("Qual è il tuo nome?");
// 2. Chiediamo all'utento il suo genere (e salviamo in una variabile)
var genere = prompt("Sei maschio o femmina?").toLowerCase();
// 3. Salviamo l'elemento HTML da modificare in una variabile
var nomeHTML = document.getElementById('name');

// 4. Se il genere è "maschio", il nome sarà azzurro. Se è "femmina", il nome sarà rosa.
// Verifichiamo che le informazioni inserite siano valide
if ((genere === "maschio" || genere === "femmina") && isNaN(nome)) {

// Stampiamo il nome a video
nomeHTML.innerHTML = nome;

// Se è maschio:
  if (genere == "maschio") {
    var colore = "lightblue";
  }
// Se è femmina:
  else {
    var colore = "pink";
  }

// Modifichiamo il colore
nomeHTML.style.color = colore;

// Predisponiamo un messaggio di errore in caso di input non valido
} else {
  alert("Per favore, inserisci delle informazioni valide.")
}
