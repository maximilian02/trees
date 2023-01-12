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
    
    // TODO: Make also inorder and postorder
    preOrder(node) {
        if(node === null) {
            return
        }

        console.log("(V) = (" + node.value + ")")
        this.preOrder(node.left)
        this.preOrder(node.right)

        return
    }

    print() {
        console.log('///////////////////////////////////////////////////');
        console.log('--->PRINT TREE VALUES<---- Preorder Traversal mode');
        this.preOrder(this.root)
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
bst.insert(3)
bst.insert(7)

// Check if those values exists on the tree
const isValue10Present = bst.search(bst.root, 10) ? VALUE_PRESENT : VALUE_NOT_PRESENT
const isValue5Present = bst.search(bst.root, 5) ? VALUE_PRESENT : VALUE_NOT_PRESENT
const isValue15Present = bst.search(bst.root, 15) ? VALUE_PRESENT : VALUE_NOT_PRESENT
const isValue3Present = bst.search(bst.root, 3) ? VALUE_PRESENT : VALUE_NOT_PRESENT
const isValue7Present = bst.search(bst.root, 7) ? VALUE_PRESENT : VALUE_NOT_PRESENT
const isValue20Present = bst.search(bst.root, 20) ? VALUE_PRESENT : VALUE_NOT_PRESENT

console.log(`Computer executed a search for value 10 and returned saying "${isValue10Present}"`)
console.log(`Computer executed a search for value 5 and returned saying "${isValue5Present}"`)
console.log(`Computer executed a search for value 15 and returned saying "${isValue15Present}"`)
console.log(`Computer executed a search for value 3 and returned saying "${isValue3Present}"`)
console.log(`Computer executed a search for value 7 and returned saying "${isValue7Present}"`)
console.log(`Computer executed a search for value 20 and returned saying "${isValue20Present}"`)

bst.print()
