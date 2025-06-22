function recursion(x) {
    if (x === 0) {
        return 1;
    }
    return x * recursion(x - 1);
}

console.log(recursion(5));
// 5 * r(4)
// 5 * 4 * r(3)
// 5 * 4 * 3 * r(2)
// 5 * 4 * 3 * 2 * r(1)
// 5 * 4 * 3 * 2 * 1 * r(0)
// 5 * 4 * 3 * 2 * 1 * 1
