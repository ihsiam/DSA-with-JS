class Stack {
    constructor() {
        this.array = [];
        this.currentSize = 0;
    }

    push(value) {
        this.array[this.currentSize] = value;
        this.currentSize += 1;
    }

    pop() {
        if (this.currentSize === 0) return undefined;
        this.currentSize -= 1;
        const lastValue = this.array[this.currentSize];
        this.array.length = this.currentSize;
        return lastValue;
    }
}

function ReverseString(item) {
    const result = [];
    const stack = new Stack();
    for (let i = 0; i < item.length; i += 1) {
        stack.push(item[i]);
    }

    for (let i = 0; i < item.length; i += 1) {
        result[i] = stack.pop();
    }

    return result;
}

let string = 'reverse';
string = string.split('');
string = ReverseString(string);
console.log(string.join(''));
