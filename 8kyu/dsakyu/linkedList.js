
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    if (!value) {
      this.head = null
      this.tail = null
      this.length = 0
    }
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  push(value) {
    let newNode = new Node(value)

    if (!this.head.value) {
      this.head = newNode
      this.tail = newNode
      return this.length = 1
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  pop() {
    if (!this.head.value) {
      return undefined
    }

    let prev = this.head
    let current = this.head

    while (current.next !== null) {
      prev = current
      current = current.next
    }

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    prev.next = null
    this.tail = prev
    this.length--
  }

  unshift(value) {
    let newNode = new Node(value)

    if (!this.head.value) {
      this.head = newNode
      this.tail = newNode
      return this.length = 1
    }

    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  shift() {
    if (!this.head.value) {
      return undefined
    }
    this.head = this.head.next
    this.length--
  }

  getFirst() {
    return this.head
  }

  getLast() {
    return this.tail
  }

  getByIndex(index) {
    let i = 0
    let node = this.head

    while (i < index) {
      node = node.next
      i++
    }
    return node
  }

  set(index, value) {
    let node = this.getByIndex(index)

    node.value = value
    return node
  }

  insert(index, value) {
    let i = 0
    let node = this.getByIndex(index)
    let newNode = new Node(value)

    if (node === this.head) {
      this.head = newNode
      newNode.next = node
      this.length++
      return this
      // else if inserting at tail
    } else if (node.next === null) {
      node.next = newNode
      newNode.next = null
      this.tail = newNode
      this.length++
      return this
    }

    newNode.next = node.next
    node.next = newNode
    this.length++
    return this
  }

  delete(index) {
    if (!this.head || index > this.length - 1) {
      return undefined
    }

    let node = this.getByIndex(index)

    if (index === 0) {
      this.head = node.next
      node.next = null
    } else {
      let prev = this.getByIndex(index - 1)

      prev.next = node.next
      node.next = null
    }

    this.length--

    return this
  }

  size() {
    let count = 0
    let current = this.head
    while (current.next) {
      current = current.next
      count++
    }
    return count
  }

  reverse() {
    let current = this.head // main pointer

    //flip head/tail
    this.head = this.tail
    this.tail = current

    //pointers
    let next = current // lead pointer
    let prev = null // prev pointer

    // reverse logic
    for (let i = 0; i < this.length; i++) {
      next = current.next // lead pointer to next node
      current.next = prev // reverses node order
      prev = current // prev pointer to current node
      current = next // current pointer ++
    }
  }

  clear() {
    this.head = null
  }
}

class dblNode {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class dblLinkedList {
  constructor(value) {
    this.head = new dblNode(value)
    this.tail = this.head
    this.length = 1
  }

  push(value) {
    let newNode = new dblNode(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
}