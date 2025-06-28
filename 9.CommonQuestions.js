const str = 'Hello, How are you';

// convert str in 1 array.
console.log(str.split());
// console.log([str]);

// convert string to array with each character.
console.log(str.split(''));
// console.log([...str]);

// convert string to array with space or any sequence.
console.log(str.split(' '));

// replace any character
console.log(str.replace('H', 'A')); // for replacing first one.
// console.log(str.replace(/H/g, 'A')); // for replacing all present character.

// get substring from string
console.log(str.substring(7, 10));

// remove first character
console.log(str.substring(1, str.length));

// remove last character
console.log(str.substring(0, str.length - 1));

// remove string before specific character
const index1 = str.indexOf('o');
const afterCharacter = str.slice(index1);
console.log(afterCharacter);

// remove string after specific character
const index2 = str.indexOf('o');
const beforeCharacter = str.slice(0, index2);
console.log(beforeCharacter);

// reverse string
console.log(str.split('').reverse().join(''));

// remove extra space from both side
const str2 = '    hello   ';
console.log(str2.trim());
