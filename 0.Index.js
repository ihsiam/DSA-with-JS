const array = [10, 11, 13, 14, 15, 16, 12, 20];
const evenArray = [];
let count = 0;
const doubleArray = [];

for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
        evenArray.push(array[i]);
        doubleArray.push(array[i] * 2);
        count += 1;
    }
}

console.log(evenArray, doubleArray, count);
