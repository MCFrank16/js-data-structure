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

    readVertex(vertex){
        if (!this.adjacencyList[vertex]) return undefined;
        return this.adjacencyList[vertex];
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

    DFSIterative(startVertex){
        let stack = [];
        let result = [];
        let visitedVertex = {};
        let currentVertex;

        stack.push(startVertex);
        visitedVertex[startVertex] = 'visited';

        while (stack.length) {
            currentVertex = stack.pop(startVertex);
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(el => {
                if(!visitedVertex[el]){
                    visitedVertex[el] = 'visited';
                    stack.push(el);
                }
            })
        }
        return result;

    }
    
    // this is a right to left implementation
    // for the ltr, you have to remove slice and reverse methods
    BFS(startVertex){
        const queue = [startVertex];
        const result = [];
        const visitedVertex = {};
        visitedVertex[startVertex] = 'visited';
        let currVertex;

        while(queue.length){
            currVertex = queue.shift();
            result.push(currVertex);

            this.adjacencyList[currVertex].slice().reverse().forEach(neighbor => {
                if(!visitedVertex[neighbor]){
                    visitedVertex[neighbor] = 'visited';
                    queue.push(neighbor);
                }
            })
        }

        return result;
    }
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

// console.log(g.DFSIterative("F"));
console.log(g.BFS('A'));