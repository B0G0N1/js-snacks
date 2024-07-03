// JS-SNACK-1
console.log("1) Dato un array di numeri, creare un nuovo array contenente solo i numeri pari.");

let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
}

console.log(evenNumbers); // Output previsto: [2, 4, 6]


// JS-SNACK-2
console.log("2) Data una stringa ed una lettera, contare quante volte la lettera è ripetuta nella stringa.");

// Cambiato "Str" con "StrPie"
let strPie = "What a wonderful day for pie!";
let letter = "a";
let counter = 0;

for (let i = 0; i < strPie.length; i++) {
    if (strPie[i] === letter) {
        counter++;
    }
}

console.log(counter); // Output previsto: 3


// JS-SNACK-3
console.log("3) Dato un numero n, creare un array con i primi n termini della sequenza di Fibonacci. Le prime due cifre della sequenza sono 0 e 1, e ogni numero successivo è la somma dei due precedenti.");

let n = 5;
let fibonacciSeq = [0, 1];

while (fibonacciSeq.length < n) {
    fibonacciSeq.push(fibonacciSeq[fibonacciSeq.length - 1] + fibonacciSeq[fibonacciSeq.length - 2]);
}

console.log(fibonacciSeq); // Output previsto: [0, 1, 1, 2, 3]


// JS-SNACK-4
console.log("4) Data una stringa, creare una nuova stringa trasformando tutte le lettere minuscole in maiuscole e tutte le lettere maiuscole in minuscole.");

// Cambiato "Str" con "StrHello"
let strHello = "HeLLo WoRLD";
let transformedStr = "";

for (let i = 0; i < strHello.length; i++) {
    if (strHello[i] === strHello[i].toLowerCase()) {
        transformedStr += strHello[i].toUpperCase();
    } else {
        transformedStr += strHello[i].toLowerCase();
    }
}

console.log(transformedStr); // Output previsto: "hEllO wOrld"


// JS-SNACK-5
console.log("5) Data una stringa, verificare se questa contiene solo caratteri unici (nessun carattere si ripete). Utilizza una variabile booleana per memorizzare il risultato.");

// Cambiato "Str" con "StrUnique"
let strUnique = "abcdefg";
let hasUniqueChars = true;

for (let i = 0; i < strUnique.length - 1; i++) {
    for (let j = i + 1; j < strUnique.length; j++) {
        if (strUnique[i] === strUnique[j]) {
            hasUniqueChars = false;
        }
    }
}

console.log(hasUniqueChars); // Output previsto: true