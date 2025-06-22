class Stack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.array = [];
        this.currentSize = 0;
    }

    push(value) {
        if (this.currentSize >= this.maxSize) {
            console.log('Stack full');
        } else {
            this.array[this.currentSize] = value;
            this.currentSize += 1;
            this.display();
        }
    }

    pop() {
        if (this.currentSize > 0) {
            const poppedValue = this.array[this.currentSize - 1];
            this.currentSize -= 1;
            this.array.length = this.currentSize; // Remove top element
            console.log('Popped:', poppedValue);
            this.display();
        } else {
            console.log('Stack is empty');
        }
    }

    display() {
        console.log(this.array);
    }
}

const stack = new Stack(5);

stack.push(20);
stack.push(21);
stack.push(22);
stack.push(23);
stack.push(24);
stack.push(26);
stack.push(25);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.push(26);
stack.push(25);
stack.push(24);
stack.push(23);
stack.push(22);
stack.push(21);
