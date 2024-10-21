class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vtx) {
        if (this.adjacencyList[vtx]) {
            return false
        }

        this.adjacencyList[vtx] = []
        return true
    }

    removeVertex(vtx) {
        if (!this.adjacencyList[vtx]) {
            return undefined
        }

        for (let edge of this.adjacencyList[vtx]) { // iterate through array of connected vertices
            this.adjacencyList[edge] = this.adjacencyList[edge].filter(v => v !== vtx) // remove connection
        }

        delete this.adjacencyList[vtx] // delete vertex from graph
        return this
    }

    addEdge(vtx1, vtx2) {
        if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1].push(vtx2)
            this.adjacencyList[vtx2].push(vtx1)
            return true
        }
        return false
    }

    removeEdge(vtx1, vtx2) {
        if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(v => v !== vtx2)
            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(v => v !== vtx1)
            return true
        }
        return false
    }
}