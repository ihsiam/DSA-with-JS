function palindrome(str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let start = 0;
    let end = cleanedStr.length - 1;
    while (start < end) {
        if (cleanedStr[start] !== cleanedStr[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }
    return true;

    // return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(palindrome('level'));
