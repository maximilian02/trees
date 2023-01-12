import { VALUE_PRESENT, VALUE_NOT_PRESENT } from './utils.js'

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if(this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false
        } else {
            if(root.value === value) {
                return true
            } else if(value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
    
    inOrder(node, queue) {
        if(node === null) {
            return
        }

        this.inOrder(node.left, queue)
        queue.push(node)
        this.inOrder(node.right, queue)

        return
    }

    print() {
        let queue = []
        this.inOrder(this.root, queue)
        while (queue.length > 0) {
            var node = queue.shift()
            console.log("(V) = (" + node.value + ")")
        }
    }
}

const bst = new BinarySearchTree()

/**
 *      Inserts 3 nodes to generate
 *      the next tree:
 * 
 *       10
 *      /  \
 *     5    15
 * 
 */ 
bst.insert(10)
bst.insert(5)
bst.insert(15)

// Check if those values exists on the tree
const isValue10Present = bst.search(bst.root, 10) ? VALUE_PRESENT : VALUE_NOT_PRESENT
const isValue5Present = bst.search(bst.root, 5) ? VALUE_PRESENT : VALUE_NOT_PRESENT
const isValue15Present = bst.search(bst.root, 15) ? VALUE_PRESENT : VALUE_NOT_PRESENT
const isValue20Present = bst.search(bst.root, 20) ? VALUE_PRESENT : VALUE_NOT_PRESENT

console.log(`Computer executed a search for value 10 and returned saying "${isValue10Present}"`)
console.log(`Computer executed a search for value 5 and returned saying "${isValue5Present}"`)
console.log(`Computer executed a search for value 15 and returned saying "${isValue15Present}"`)
console.log(`Computer executed a search for value 20 and returned saying "${isValue20Present}"`)

bst.print()
