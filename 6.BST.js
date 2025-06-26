/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    makeTree(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    search(value) {
        this.searchNode(this.root, value);
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else if (root.right === null) {
            root.right = newNode;
        } else {
            this.insertNode(root.right, newNode);
        }
    }

    searchNode(root, value) {
        if (root === null) {
            console.log(false);
            return false;
        }
        if (root.value === value) {
            console.log(true);
            return true;
        }
        if (root.value > value) {
            return this.searchNode(root.left, value);
        }
        return this.searchNode(root.right, value);
    }

    // dfs
    inOrder(node = this.root) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // dfs
    preOrder(node = this.root) {
        if (node !== null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // dfs
    postOrder(node = this.root) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    // bfs
    bfsTraversal() {
        const queue = [];
        if (this.root !== null) {
            queue.push(this.root);
        }

        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.value);

            if (current.left !== null) {
                queue.push(current.left);
            }

            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }

    // find out min and max value
    min(startNode = this.root) {
        if (this.isEmpty()) {
            console.log('Tree is empty');
            return null;
        }
        let current = startNode;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    max(startNode = this.root) {
        if (this.isEmpty()) {
            console.log('Tree is empty');
            return null;
        }
        let current = startNode;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }

    // delete node
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) return null;

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Case 1: No child
            if (root.left === null && root.right === null) {
                return null;
            }

            // Case 2: One child
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            // Case 3: Two children
            const minNode = this.min(root.right);
            root.value = minNode.value;
            root.right = this.deleteNode(root.right, minNode.value);
        }

        return root;
    }
}

const bst = new BST();
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(15);
bst.makeTree(1);
bst.makeTree(7);
bst.makeTree(9);
bst.makeTree(13);
bst.makeTree(17);
bst.makeTree(11);
bst.search(6);
console.dir(bst, { depth: null });
bst.delete(5);
console.dir(bst, { depth: null });
console.log('In-Order');
bst.inOrder();
console.log('Pre-Order');
bst.preOrder();
console.log('Post-Order');
bst.postOrder();
console.log('BFS travers');
bst.bfsTraversal();
console.log(bst.min().value);
console.log(bst.max());
