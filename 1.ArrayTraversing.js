const array = [20, 10, 23, 23, 45, 56, 65];

// Traverse all elements
array.forEach((value) => {
    console.log(value);
});

// Traverse a specific value by 1-based index
function specificTraverse(index) {
    if (index > 0 && index <= array.length) {
        console.log(array[index - 1]);
    } else {
        console.log('Enter a valid index');
    }
}

specificTraverse(5);
