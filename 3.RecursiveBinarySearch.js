const array = [1, 3, 5, 7, 9];
let pos = -1;
const start = 0;
const end = array.length - 1;
const find = 8;

function recursiveBinarySearch(value, Start, End) {
    if (Start > End) {
        return false;
    }
    const mid = Math.floor((Start + End) / 2);
    if (array[mid] === value) {
        pos = mid + 1;
        return true;
    }
    if (array[mid] < find) {
        return recursiveBinarySearch(value, mid + 1, End);
    }
    return recursiveBinarySearch(value, Start, mid - 1);
}

recursiveBinarySearch(find, start, end);
console.log(pos);
