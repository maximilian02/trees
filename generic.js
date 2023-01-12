import {
    VALUE_A,
    VALUE_B,
    VALUE_C,
    VALUE_D,
    VALUE_F,
    VALUE_X,
    VALUE_Y,
    VALUE_Z
} from './utils.js'

class Node {
    constructor(value) {
        this.value = value
        this.children = null
    }
}

class GenericSearchTree {
    constructor() {
        this.root = {
            value: 'A',
            children: []
        }
    }

    isEmpty() {
        return this.root === null
    }

    search(data, node) {
        if (node && node.value === data)
            return node
        if(node && node.children) {
            for(let child of node.children) {
                if(this.search(data, child))
                    return child
            }
        }
        return null
    }

    // Note: this assumes that initial tree would have a 
    // starting default 'A' node 
    insert(target, val) {
        const lookUpNode = this.search(target, this.root)
        if(lookUpNode.children) {
            lookUpNode.children.push(new Node(val))
        } else {
            lookUpNode.children = [new Node(val)]
        }
    }
}

const gst = new GenericSearchTree()
gst.insert(VALUE_A, VALUE_B)
gst.insert(VALUE_A, VALUE_D)
gst.insert(VALUE_A, VALUE_F)

gst.insert(VALUE_B, VALUE_C)
gst.insert(VALUE_D, VALUE_Z)

const isValueAPresent = gst.search(VALUE_A, gst.root) ? true : false
const isValueBPresent = gst.search(VALUE_B, gst.root) ? true : false
const isValueCPresent = gst.search(VALUE_C, gst.root) ? true : false
const isValueDPresent = gst.search(VALUE_D, gst.root) ? true : false
const isValueFPresent = gst.search(VALUE_F, gst.root) ? true : false
const isValueZPresent = gst.search(VALUE_Z, gst.root) ? true : false

const isValueXPresent = gst.search(VALUE_X, gst.root) ? true : false
const isValueYPresent = gst.search(VALUE_Y, gst.root) ? true : false

console.log(`Computer looked into the tree for value '${
    VALUE_A
}' and returned saying: ${isValueAPresent ? 'IS HERE' : 'IS NOT HERE'}`)

console.log(`Computer looked into the tree for value '${
    VALUE_B
}' and returned saying: ${isValueBPresent ? 'IS HERE' : 'IS NOT HERE'}`)

console.log(`Computer looked into the tree for value '${
    VALUE_C
}' and returned saying: ${isValueCPresent ? 'IS HERE' : 'IS NOT HERE'}`)

console.log(`Computer looked into the tree for value '${
    VALUE_D
}' and returned saying: ${isValueDPresent ? 'IS HERE' : 'IS NOT HERE'}`)

console.log(`Computer looked into the tree for value '${
    VALUE_F
}' and returned saying: ${isValueFPresent ? 'IS HERE' : 'IS NOT HERE'}`)

console.log(`Computer looked into the tree for value '${
    VALUE_Z
}' and returned saying: ${isValueZPresent ? 'IS HERE' : 'IS NOT HERE'}`)

console.log(`Computer looked into the tree for value '${
    VALUE_X
}' and returned saying: ${isValueXPresent ? 'IS HERE' : 'IS NOT HERE'}`)

console.log(`Computer looked into the tree for value '${
    VALUE_Y
}' and returned saying: ${isValueYPresent ? 'IS HERE' : 'IS NOT HERE'}`)

