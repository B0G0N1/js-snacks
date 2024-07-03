// JS-SNACK-1
console.log("1) Dato un array di numeri, creare un nuovo array contenente solo i numeri pari");

let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
}

console.log(evenNumbers);


// JS-SNACK-2
console.log("2) Data una stringa ed una lettera, contare quante volte la lettera è ripetuta nella stringa");

let str = "What a wonderful day for pie!";
let letter = "a";
let counter = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
        counter++;
    }
}

console.log(counter);


// JS-SNACK-3
console.log("Dato un numero n, creare un array con i primi n termini della sequenza di Fibonacci. Le prime due cifre della sequenza sono 0 e 1, e ogni numero successivo è la somma dei due precedenti");

let n = 5; // Puoi cambiare questo valore per ottenere più o meno termini della sequenza
let fibonacciSeq = [0, 1];

while (fibonacciSeq.length < n) {
    fibonacciSeq.push(fibonacciSeq[fibonacciSeq.length - 1] + fibonacciSeq[fibonacciSeq.length - 2]);
}

console.log(fibonacciSeq);
