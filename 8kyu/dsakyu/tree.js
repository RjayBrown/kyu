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

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
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
                        current = current.left
                    }
                } else { // condition for right insert - newNode.value > current.value
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
}