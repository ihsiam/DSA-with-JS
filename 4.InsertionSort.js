const array = [4, 3, 6, 1, 9, 2];

function InsertionSort(input) {
    const data = [...input];
    for (let i = 1; i < data.length; i += 1) {
        const current = data[i];
        let j = i - 1;

        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j];
            j -= 1;
        }
        data[j + 1] = current;
    }
    return data;
}

console.log(InsertionSort(array));
