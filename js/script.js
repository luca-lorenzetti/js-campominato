/* Consegna

Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:

con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */



var diff = 0; //DEFAULT
var max;

do{
    diff = parseInt(prompt("INSERIRE LIVELLO DIFFICOLTA'\n0) Easy\n1) Normal\n2) Hard"));
}while( diff > 2 || diff < 0 || isNaN(diff))

var bombs = generateNumber(diff);
console.log( bombs);

var end = false;
var numsInput = [];
var numUser;

// IL CICLO SI RIPERTE FINCHE' END NON è UGUALE A TRUE
while( !end ){
    // CICLO FINCHE' IN NUMERO INSERITO NON E' VALIDO
    do{
        numUser = parseInt(prompt("Inserisci un numero tra( 0 e "+max+" ), occhio alle bombe!"));
    }while(numIsOk(numUser, numsInput, max) != 2 )
    
    // MESSAGGIO IN CASO DI PARTITA PERSA
    if( bombs.includes(numUser)){
        end = true;
        console.log(numsInput.length)
        alert("Hai preso una bomba!!! Partita finita, punteggio ottenuto " + parseInt(numsInput.length-1));
    }
    else{
        numsInput.push(numUser);
     // MESSAGGIO IN CASO DI PARTITA VINTA
        if ( numsInput.length == (max - bombs.length)){
            alert("COMPLIMENTI HAI VINTO! INCREDIBILE");
            end = true;
        }
    }
}

// FUNZIONE PER CONTROLLARE CHE IL NUMERO INSERITO SIA VALIDO
function numIsOk( input,numsInput,max ){
    if(isNaN(input) || input > max){
        alert("Numero non valido")
        return 0;
    }
    else if( numsInput.includes(input)){
        alert("Numero già inserito");
        return 1;
    }
    else{
        numsInput.push(input)
        return 2;
    }
}

// FUNZIONE CHE GENERA I NUMERI
function generateNumber(diff){
    var arr = [];
    var num = 0;

    // GENERO I NUMERI STABILENDO IL MASSIMO E CONTROLLANDO CHE NON SIA STATO GENERATO GIA' GENERATO LO STESSO NUMERO
    while ( arr.length != 16) {
        if( diff == 0){
            max  = 100;
        }
        else if( diff == 1){
            max = 80;
        }
        else{
            max = 50;
        }

        num = Math.floor(Math.random()*max+1);
        if( !arr.includes(num) ){
            arr.push(num);
        }
    }
    return arr;
}