class Queue {
    constructor(maxSize) {
        this.queue = [];
        this.maxSize = maxSize;
        this.currentSize = 0;
    }

    enqueue(value) {
        if (this.currentSize >= this.maxSize) {
            console.log('Queue full');
        } else {
            this.queue[this.currentSize] = value;
            this.currentSize += 1;
            this.display();
        }
    }

    dequeue() {
        if (this.currentSize > 0) {
            for (let i = 0; i < this.queue.length - 1; i += 1) {
                this.queue[i] = this.queue[i + 1];
            }
            this.currentSize -= 1;
            this.queue.length = this.currentSize;
            this.display();
        } else {
            console.log('Queue is empty');
        }
    }

    front() {
        if (this.currentSize > 0) {
            console.log(this.queue[0]);
        } else {
            console.log('Queue is empty');
        }
    }

    rear() {
        if (this.currentSize > 0) {
            console.log(this.queue[this.currentSize - 1]);
        } else {
            console.log('Queue is empty');
        }
    }

    display() {
        console.log(this.queue);
    }
}

const queue = new Queue(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.front();
queue.dequeue();
queue.front();
queue.dequeue();
queue.front();
queue.dequeue();
queue.front();
queue.dequeue();
queue.front();
queue.dequeue();
queue.front();
queue.dequeue();
queue.front();
queue.enqueue(1);
queue.rear();
queue.enqueue(2);
queue.rear();
queue.enqueue(3);
queue.rear();
queue.enqueue(4);
queue.rear();
queue.enqueue(5);
queue.rear();
queue.enqueue(6);
queue.rear();
