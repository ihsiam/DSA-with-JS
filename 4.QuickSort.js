const array = [38, 27, 43, 3, 9, 82, 10];

function QuickSort(input) {
    if (input.length <= 1) {
        return input;
    }

    const pivot = input[0];
    const left = [];
    const right = [];

    for (let i = 1; i < input.length; i += 1) {
        if (input[i] < pivot) {
            left.push(input[i]);
        } else {
            right.push(input[i]);
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}

console.log(QuickSort(array));
