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
    
    // inorder traversal
    inOrder(node) {
        if(node === null) {
            return
        }
        this.inOrder(node.left)
        console.log("(V) = (" + node.value + ")")
        this.inOrder(node.right)
    }

    // preorder traversal
    preOrder(node) {
        if(node === null) {
            return
        }
        console.log("(V) = (" + node.value + ")")
        this.preOrder(node.left)
        this.preOrder(node.right)
        return
    }

    // postorder traversal
    postOrder(node) {
        if(node === null) {
            return
        }
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log("(V) = (" + node.value + ")")
    }

    levelOrder() {
        // use the optimised queue implementation
        const queue = []
        queue.push(this.root)
        while(queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root = this.root) {
        if(!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root = this.root) {
        if(!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    deleteNode(root = this.root, value) {
        if(root === null) {
            return root
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if(value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if(!root.left && !root.right) {
                return null
            }
            if(!root.left) {
                return root.right
            } else if(!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    print() {
        console.log('///////////////////////////////////////////////////')
        console.log('--->PRINT TREE VALUES<---- Preorder Traversal mode')
        this.postOrder(this.root)
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
 *    /
 *   3
 * 
 */ 
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)

bst.levelOrder()
console.log('------');
bst.delete(10)
bst.levelOrder()

/**
 *      After delete 10
 *      the tree now looks like:
 * 
 *       15
 *      / 
 *     5    
 *   /
 *  3
 */ 