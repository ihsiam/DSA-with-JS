function mergeArrays(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i += 1) {
        result[i] = arr1[i];
    }

    for (let i = 0; i < arr2.length; i += 1) {
        result[arr1.length + i] = arr2[i];
    }

    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];

const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);
