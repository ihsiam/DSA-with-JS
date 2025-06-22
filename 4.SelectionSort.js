const array = [4, 3, 6, 1, 2, 9];

function SelectionSort(input) {
    const data = [...input];
    for (let i = 0; i < data.length - 1; i += 1) {
        let tempIndex = i;
        for (let j = i + 1; j < data.length; j += 1) {
            if (data[j] < data[tempIndex]) {
                tempIndex = j;
            }
        }
        [data[i], data[tempIndex]] = [data[tempIndex], data[i]];
    }
    return data;
}

console.log(SelectionSort(array));
