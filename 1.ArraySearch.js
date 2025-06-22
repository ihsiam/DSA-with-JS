function arraySearch(array, item) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === item) {
            console.log(`Found at position: ${i + 1}`);
            return i + 1;
        }
    }

    console.log('Item not found');
    return -1;
}

// Example usage
const array = [1, 2, 3, 6, 7];
arraySearch(array, 3); // Found at position: 3
arraySearch(array, 10); // Item not found
