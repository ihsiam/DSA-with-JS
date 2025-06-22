function insertIntoArray(array, value, position) {
    if (position < 0 || position > array.length) {
        console.log('Invalid position');
        return [...array];
    }

    const newArray = [...array];

    console.log('Before:', array);

    // Shift elements right to create space
    for (let i = newArray.length - 1; i >= position; i -= 1) {
        newArray[i + 1] = newArray[i];
    }

    // Insert the new value
    newArray[position] = value;

    console.log('After:', newArray);
    return newArray;
}

// Example usage
const array = [1, 2, 3, 6, 7];
insertIntoArray(array, 12, 3);
