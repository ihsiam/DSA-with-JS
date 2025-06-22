class ListNode {
    constructor(value) {
        this.head = {
            value,
            next: null,
        };
        this.tail = this.head;
        this.size = 1;
    }

    append(value) {
        const newNode = {
            value,
            next: null,
        };

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size += 1;
    }

    traversing() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    delete(index) {
        if (index < 1 || index > this.size) {
            console.log('Index out of bounds');
            return false;
        }

        if (index === 1) {
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null;
            }
        } else {
            let currentNode = this.head;
            let counter = 1;
            while (counter < index - 1) {
                currentNode = currentNode.next;
                counter += 1;
            }

            currentNode.next = currentNode.next.next;

            // Update tail if last element was removed
            if (index === this.size) {
                this.tail = currentNode;
            }
        }

        this.size -= 1;
        return true;
    }

    insert(index, value) {
        if (index < 1 || index > this.size + 1) {
            console.log('Index out of bounds');
            return false;
        }

        const newNode = {
            value,
            next: null,
        };

        if (index === 1) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) this.tail = newNode;
        } else {
            let currentNode = this.head;
            let counter = 1;
            while (counter < index - 1) {
                currentNode = currentNode.next;
                counter += 1;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;

            // Update tail if inserted at the end
            if (index === this.size + 1) {
                this.tail = newNode;
            }
        }

        this.size += 1;
        return true;
    }

    search(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                console.log(true);
                return true;
            }
            currentNode = currentNode.next;
        }
        console.log(false);
        return false;
    }
}

// Example usage
const list = new ListNode(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.delete(3);
list.insert(3, 300);
list.search(1);
list.traversing();
