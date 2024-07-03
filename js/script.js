// 1) Dato un array di numeri, creare un nuovo array contenente solo i numeri pari.
let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];

i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
    i++;
}

console.log(evenNumbers);