/* eslint-disable no-irregular-whitespace */
/* eslint-disable eqeqeq */

/* Short notes:
1. There is no data type called array in js. Type of array is object.
2. 'use strict' doesn't allow hoisting or undefined variable.
3. + converts any data type into number.
4. eval converts string into expression.
5. We can't define variable with number. But we can define object key with number.
6. Everything in js is either a primitive or object.
7. !true - true = -1
8. true + + '10' = 11 */

/* 1
const a = [];
const b = [];
console.log(a == b);
false.
console.log(a === b);
false.
Memory locations are differnt. */

/* 2
const a = [];
const b = a;
assigning memory location
console.log(a == b);
true
console.log(a === b);
true */

/* 3
const a = [20];
const b = [20];
console.log(a == b);
true.
console.log(a === b);
true.
Checks element value */

/* 4
const z = [1, 2, 3, 4];
console.log(...z);
1,2,3,4
Destructuring */

/* 5
console.log(typeof NaN);
Number.
NaN is a special type of number */

/* 6
const a = 10 - -10;
console.log(a);
20 */

/* 7
const set = new Set([1, 2, 2, 3, 4]);
console.log(set);
{1,2,3,4}
removes duplicate value */

/* 8
const a = { name: 'Siam' };
console.log(delete a);
false
console.log(delete a.name);
true
delete operator retuns true or false
Note: delete operator only can delete the property of an object.
It can't delete the whole object */

/* 9
const a = ['x', 'y', 'z'];
const [b] = a;
console.log(b);
x
destructuring first element
const [,b] = a;
console.log(b);
y
destructuring second element
const [b,c,d] = a;
console.log(b,c,d);
x,y,z
array destructuring. */

/* 10
const data1 = { name: 'Siam', age: 34 };
const data2 = { age: 24, city: 'Sherpur', profession: 'student' };
const data = { ...data1, ...data2 };
console.log(data);
{ name: 'Siam', age: 24, city: 'Sherpur', profession: 'student' }
reassigned the value of age.
const data = { data1, ...data2 };
console.log(data);
{
  data1: { name: 'Siam', age: 34 },
  age: 24,
  city: 'Sherpur',
  profession: 'student'
} */

/* 11
const name = 'Siam';
console.log(name());
TypeError: name is not a function */

/* 12
const result = false || {} || null;
console.log(result);
{} */

/* 13
const result = null || false || '';
console.log(result);
Empty string
If both of all values are false then it picks the last false value */

/* 14
const result = [] || 0 || true;
console.log(result);
[] */

/* 15
console.log(Promise.resolve(5));
Promise {<fulfilled>: 5} */

/* 16
console.log('❤️' === '❤️');
true
unicode are same */

/* 17
let name = 'Siam';
function getName() {
    console.log(name);
    let name = 'Ismile';
}
getName();
Uncaught ReferenceError: Cannot access 'name' before initialization */

/* 18
function sumValues(x, y, z) {
    return x + y + z;
}
console.log(sumValues(...[1, 2, 3]));
6 */

/* 19
const str = 'code step by step';
console.log(!typeof str === 'object');
false
console.log(!typeof str === 'string');
false
operation is performing from left to write.
That's why at first
!typeof str = false
and then
false === object/string
= false */

/* 20
const str = 'String';
const age = 21;
console.log(Number.isNaN(str));
false
NaN is a special type of number.
console.log(Number.isNaN(age));
false */

/* 21
const person = { name: 'Siam' };
Object.seal(person);
person.age = 24;
console.log(person);
{ name: 'Siam' }
we can't add new values after using seal. We can only modify the existing values. */

/* 22
const arr = [1, 2, 3, 4];
arr.shift();
console.log(arr);
[ 2, 3, 4 ]
shift removes the first element and returns the value.
arr.pop();
console.log(arr);
[ 2, 3 ]
pop removes the last element and returns the value */

/* 23
What is the difference between map and forEach?
map always return something, but forEach don't. */

/* 24
const arr = ['a', 'b', 'c'];
delete arr[1];
console.log(arr);
[ 'a', <1 empty item>, 'c' ]
It's empty because delete doesn't keep any blank space as like null or undefined.
Also the length will remain same. */

/* 25
const a = 4 ** 5;
console.log(a);
** is the exponentiation operator.
we can also use Math.pow() */

/* 26
let a = 2;
setTimeout(() => {
    console.log(a);
}, 0);
a = 30;
output: 30
setTimeout executes its callback after the current call stack, even with a delay of 0 */

/* 27
const a = 'like';
const b = 'like';
console.log(a === b);
true */

/* 28
let a = 1;
let b = 1;
let c = 2
console.log(a === b === --c);
false
As it run from left to right, then
a ===b comes true. Then
true === 1 comes false */

/* 29
console.log(a);
var a = 10;
output: undefined.
Because var declarations are hoisted to the top with a default value of undefined.
If we used let instead of var then the output will be:
ReferenceError: Cannot access 'a' before initialization */

/* 30
for (var i = 0; i < 3; i += 1) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}
Output: 3,3,3
var is a function scope. All callback use same i.
let is a block scope. If we use let instead of var then the output will be: 0,1,2.
Because each callback gets its own i */

/* 31
for (let i = 0; i < 5; i += 1) {
    if (i === 3) continue;
    console.log(i);
}
0,1,2,4
*/

/* 32
let a = { size: 'small' };
const b = a;
a.size = 'medium';
a = null;
console.log(b.size);
console.log(a);
medium
null
stores Reference, not value.
But if we change the variable type then the copy one won't change. */

/* 33
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');
bar();
foo();
baz();
First
Third
Second */

/* 34
const person = { name: 'Siam' };
function sayHi(age) {
    return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 21));
Siam is 21
console.log(sayHi.bind(person, 21)());
Siam is 21 */

/* 35
const num = [1, 2, 3];
num[9] = num;
console.log(num);
infinite array */

/* 36
function hello() {
    return (() => 0)();
}
console.log(typeof hello());
number
If we didn't call the arrow funtion immediately then it would return function */

/* 37
const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
});
const SecondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
});
Promise.race([firstPromise, SecondPromise]).then((res) => console.log(res));
two
return who finished first. */

/* 38
(() => {
    const x = (y = 10);
})();
console.log(typeof x);
undefined */

/* 39
(() => {
    const x = y = 10;
})();
console.log(typeof y);
number as y will automatically be declared with var */

/* 40
let x = 100;
(() => {
    var x = 20;
})();
console.log(x);
100
x is already defined globally by let, so var won't be able to change the value. */
