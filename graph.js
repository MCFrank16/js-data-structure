// this is an undirected graph
// using the adjacency List to store vertecies and edges.

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
        this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    DFSRecursive(startVertex){
        const result = [];
        const visitedVertex = {};

        const adjacencyList = this.adjacencyList;

        (function recurse (vertex) {
           if (!vertex) return null;
           visitedVertex[vertex] = 'visited';
            result.push(vertex);

            adjacencyList[vertex].forEach(element => {
            if (!visitedVertex[element]) recurse(element)
            });
        })(startVertex);

        return result;
    }

    // DFSIterative(startVertex){
    //     let stack = [];
    //     stack.push(startVertex);

    //     while ()

    // }
}

// let rwandaAir = new Graph();

// rwandaAir.addVertex('Kigali');
// rwandaAir.addVertex('Guangzhou');
// rwandaAir.addVertex('Mumbai');
// rwandaAir.addVertex('Dubai');
// rwandaAir.addVertex('Harare');

// rwandaAir.addEdge('Kigali', 'Guangzhou');
// rwandaAir.addEdge('Mumbai', 'Guangzhou');
// rwandaAir.addEdge('Dubai', 'Kigali');
// rwandaAir.addEdge('Harare', 'Dubai');
// rwandaAir.addEdge('Harare', 'Kigali');

// rwandaAir.DFSRecursive('Kigali');
// rwandaAir.removeEdge('Harare', 'Kigali');

// console.log(rwandaAir);

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.DFSRecursive("A"));