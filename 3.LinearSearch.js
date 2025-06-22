const array = [1, 3, 5, 7, 9];
let pos = -1;
const find = 51;

for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === find) {
        pos = i + 1;
        break;
    }
}

console.log(pos);
