class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(value) {
        if (value) {
            this.root = new Node(value)
        } else {
            this.root = null
        }
    }

    // INSERT METHOD
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) { // empty check
            this.root = newNode
            return this
        } else {
            let current = this.root

            while (true) {
                if (newNode.value === current.value) { // Checks for duplicate value
                    return undefined
                }

                if (newNode.value < current.value) { // condition for left insert
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left // moving pointer to next node
                    }
                } else { // condition for right insert - newNode.value > current.value
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right // moving pointer to next node
                    }
                }
            }
        }
    }

    // TREE TRAVERSAL

    // breadth-first search
    bfs() {
        if (!this.root) { // empty check
            return null
        }
        let current = this.root // pointer
        let queue = [] // node queue FIFO
        let data = []

        queue.push(current)

        while (queue.length) {
            // search siblings at each level and push values to data array before moving to child nodes
            current = queue.shift()
            data.push(current.value)

            if (current.left) { // search left
                queue.push(current.left)
            }
            if (current.right) { // search right
                queue.push(current.right)
            }
        }
        return data
    }

    // depth-first search (recursive)
    dfsPostOrder(node = this.root, data = []) {
        if (node === null) { // empty check
            return data
        }

        data.push(node.value) // push values to data array (root->leaf)

        if (node.left) {
            this.dfsPostOrder(node.left, data)
        }

        if (node.right) {
            this.dfsPostOrder(node.right, data)
        }

        return data
    }

    dfsPreOrder(node = this.root, data = []) {
        if (node === null) { // empty check
            return data
        }

        if (node.left) {
            this.dfsPreOrder(node.left, data)
        }

        if (node.right) {
            this.dfsPreOrder(node.right, data)
        }

        data.push(node.value) // push values to data array (leaf->root)

        return data
    }

    dfsInOrder(node = this.root, data = []) {
        if (node === null) { // empty check
            return data
        }

        if (node.left) {
            this.dfsInOrder(node.left, data)
        }

        data.push(node.value) // push values to data array (leaf->root->leaf)

        if (node.right) {
            this.dfsInOrder(node.right, data)
        }

        return data
    }
}