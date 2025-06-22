const array = [1, 3, 5, 7, 9];
let pos = -1;
let start = 0;
let end = array.length - 1;
const find = 9;

while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid] === find) {
        pos = mid + 1;
        break;
    } else if (array[mid] < find) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(pos);
