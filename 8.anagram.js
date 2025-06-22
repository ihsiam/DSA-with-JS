function isAnagram(str1, str2) {
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const charCount = {};

    cleanStr1.split('').forEach((char) => {
        charCount[char] = (charCount[char] || 0) + 1;
    });

    for (let i = 0; i < cleanStr2.length; i += 1) {
        const char = cleanStr2[i];
        if (!charCount[char]) {
            return false;
        }
        charCount[char] -= 1;
    }

    return true;
}

console.log(isAnagram('listtten', 'silenttt'));
console.log(isAnagram('triangle', 'integral'));
console.log(isAnagram('apple', 'pale'));
