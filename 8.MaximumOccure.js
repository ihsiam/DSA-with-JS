function MaxOcc(str) {
    const obj = {};
    let max = '';
    str.split('').forEach((char) => {
        obj[char] = (obj[char] || 0) + 1;
        if (obj[char] > (obj[max] || 0)) {
            max = char;
        }
    });
    console.log(max);
}

MaxOcc('hello');
