const array = [4, 3, 6, 10, 1, 9];

function BubbleSort(input) {
    const data = [...input];
    for (let i = 0; i < data.length - 1; i += 1) {
        for (let j = 0; j < data.length - 1; j += 1) {
            if (data[j] > data[j + 1]) {
                [data[j], data[j + 1]] = [data[j + 1], data[j]];
            }
        }
    }
    return data;
}

console.log(BubbleSort(array));
