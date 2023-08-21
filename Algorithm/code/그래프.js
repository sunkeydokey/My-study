class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return;
    this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = [vertex2];
    if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = [vertex1];
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) return undefined;
    if (!this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
    this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
  }
}

let g = new Graph();
g.addVertex('Dallas');
console.log(g.adjacencyList);
g.addVertex('Tokyo');
console.log(g.adjacencyList);

g.addVertex('Aspen');
console.log(g.adjacencyList);
g.addVertex('Los Angeles');
console.log(g.adjacencyList);
g.addVertex('Hong Kong');
console.log(g.adjacencyList);
g.addEdge('Dallas', 'Tokyo');
console.log(g.adjacencyList);
g.addEdge('Dallas', 'Aspen');
console.log(g.adjacencyList);
g.addEdge('Hong Kong', 'Tokyo');
console.log(g.adjacencyList);
g.addEdge('Hong Kong', 'Dallas');
console.log(g.adjacencyList);
g.addEdge('Los Angeles', 'Hong Kong');
console.log(g.adjacencyList);
g.addEdge('Los Angeles', 'Aspen');
