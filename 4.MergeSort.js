const array = [38, 27, 43, 3, 9, 82, 10];

function Merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i += 1;
        } else {
            result.push(right[j]);
            j += 1;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

function MergeSort(input) {
    if (input.length <= 1) {
        return input;
    }

    const mid = Math.floor(input.length / 2);
    const left = MergeSort(input.slice(0, mid));
    const right = MergeSort(input.slice(mid));

    return Merge(left, right);
}

const sorted = MergeSort(array);
console.log(sorted);
