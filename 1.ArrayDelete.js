function deleteFromArrayManual(originalArray, position) {
    if (position < 0 || position >= originalArray.length) {
        console.log('Invalid position');
        return [...originalArray]; // return unchanged copy
    }

    const array = [...originalArray]; // shallow copy
    console.log('Before:', originalArray);

    for (let i = position; i < array.length - 1; i += 1) {
        array[i] = array[i + 1];
    }

    array.length -= 1;
    console.log('After:', array);
    return array;
}

const array = [1, 2, 3, 6, 7];
deleteFromArrayManual(array, 3);
