
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    if (value === undefined) {
      this.head = null
      this.tail = null
      this.length = 0
    } else {
      this.head = new Node(value)
      this.tail = this.head
      this.length = 1
    }

    return this
  }

  push(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return this
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  pop() {
    if (!this.head) {
      return false
    }

    let prev = this.head
    let current = this.head

    while (current.next !== null) { // loop to assign pointers to last two nodes
      prev = current
      current = current.next
    }

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    const deleted = this.tail
    prev.next = null
    this.tail = prev
    this.length--

    return deleted
  }

  unshift(value) {
    let newNode = new Node(value)

    if (!this.head.value) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return this
    }

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  shift() {
    if (!this.head) {
      return false
    }
    const deleted = this.head
    this.head = this.head.next
    this.length--

    return deleted
  }

  getFirst() {
    return this.head
  }

  getLast() {
    return this.tail
  }

  getByIndex(index) {
    if (!this.head || index === undefined || index > this.length) { // empty check / valid index check
      return null
    }
    if (index === 0) {
      return this.head
    }

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
    if (index === undefined || value === undefined) { // valid params check
      return false
    }

    let i = 0
    let node = this.getByIndex(index)
    let newNode = new Node(value)

    if (this.head === null) { // inserting into empty list
      this.head = newNode
      this.tail = newNode
      this.length = 1
      return this
    } else if (node === this.head) { // inserting at head
      this.unshift(value)
      return this
    } else if (node === this.tail) { // inserting at tail
      this.push(value)
      return this
    }

    newNode.next = node.next
    node.next = newNode
    this.length++
    return this
  }

  delete(index) {
    if (!this.head || index === undefined || index > this.length - 1) { // empty check / valid index check
      return false
    }

    let node = this.getByIndex(index) // pointer

    if (index === 0 && this.length > 1) { // removing head - override shift method (list length)
      this.shift()
      this.length++
    } else if (index !== 0 && index === this.length - 1) { // removing tail - override pop method (list length)
      this.pop()
      this.length++
    } else if (index === 0 && this.length === 1) { // removing last remaining node - override clear method (list length)
      this.clear()
      this.length++
    } else if (this.length === 2) { // removing second to last remaining node
      this.head = node.next
      this.tail = node.next
      node.next = null
    } else {
      let prev = this.getByIndex(index - 1) // pointer to prev node

      prev.next = node.next
    }

    this.length--

    return node
  }

  size() {
    let count = 1
    let current = this.head
    while (current.next) {
      current = current.next
      count++
    }
    return count
  }

  reverse() {
    if (!this.head) { // empty check
      return false
    }

    let current = this.head // main pointer

    //flip head/tail
    this.head = this.tail
    this.tail = current

    //pointers
    let lead = current // lead pointer
    let prev = null // prev pointer

    // reverse logic
    for (let i = 0; i < this.length; i++) {
      lead = current.next // lead pointer to next node
      current.next = prev // reverses node order
      prev = current // prev pointer to current node
      current = lead // current pointer ++
    }
  }

  clear() {
    this.head = null
    this.tail = null
    this.length = 0

    return true
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