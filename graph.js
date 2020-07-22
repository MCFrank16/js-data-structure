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
}

let rwandaAir = new Graph();

rwandaAir.addVertex('Kigali');
rwandaAir.addVertex('Guangzhou');
rwandaAir.addVertex('Mumbai');
rwandaAir.addVertex('Dubai');
rwandaAir.addVertex('Harare');

rwandaAir.addEdge('Kigali', 'Guangzhou');
rwandaAir.addEdge('Mumbai', 'Guangzhou');
rwandaAir.addEdge('Dubai', 'Kigali');
rwandaAir.addEdge('Harare', 'Dubai');
rwandaAir.addEdge('Harare', 'Kigali');

rwandaAir.removeVertex('Kigali');
// rwandaAir.removeEdge('Harare', 'Kigali');

console.log(rwandaAir);