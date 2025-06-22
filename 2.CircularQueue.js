class CircularQueue {
    constructor(size) {
        this.maxSize = size;
        this.queue = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }

    enqueue(value) {
        if (this.currentSize !== this.maxSize) {
            if (this.rear === this.maxSize - 1) {
                this.rear = 0;
            } else {
                this.rear += 1;
            }
            this.queue[this.rear] = value;
            this.currentSize += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
            this.display();
        }
    }

    dequeue() {
        if (this.currentSize !== 0) {
            this.queue[this.front] = null;
            if (this.front !== this.maxSize - 1) {
                this.front += 1;
            } else {
                this.front = 0;
            }
            this.currentSize -= 1;
            if (this.currentSize === 0) {
                this.front = -1;
                this.rear = -1;
            }
            this.display();
        }
    }

    display() {
        console.log(this.queue);
    }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.dequeue();
circularQueue.enqueue(4);
circularQueue.enqueue(5);
circularQueue.enqueue(6);
circularQueue.enqueue(7);
circularQueue.enqueue(8);
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);
circularQueue.enqueue(6);
circularQueue.enqueue(7);
circularQueue.enqueue(8);
// circularQueue.enqueue(7);
