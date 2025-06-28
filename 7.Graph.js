class Graph {
    constructor() {
        this.data = {};
    }

    addVertex(vertex) {
        if (!this.data[vertex]) {
            this.data[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.data[v1]) {
            this.addVertex(v1);
        }
        if (!this.data[v2]) {
            this.addVertex(v2);
        }

        this.data[v1].push(v2);
        this.data[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (this.data[v1]) {
            this.data[v1] = this.data[v1].filter((item) => item !== v2);
        }
        if (this.data[v2]) {
            this.data[v2] = this.data[v2].filter((item) => item !== v1);
        }
    }

    removeVertex(vertex) {
        if (!this.data[vertex]) {
            return false;
        }
        this.data[vertex].forEach((item) => {
            this.removeEdge(vertex, item);
        });

        delete this.data[vertex];
        return true;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
console.log(graph);
graph.removeEdge('A', 'B');
console.log(graph);
graph.removeVertex('A');
console.log(graph);
