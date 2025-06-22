function headTailRecursion(x) {
    console.log(x); // head
    if (x > 0) {
        headTailRecursion(x - 1);
    }
    console.log(x); // tail
}

headTailRecursion(5);
