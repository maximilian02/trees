const tree = {
    title: 'A',
    children: [
        {
            title: 'B',
            children: [
                {
                    title: 'C'
                }
            ]
        },
        {
            title: 'D',
            children: [
                {
                    title: 'Z'
                }
            ]
        },
        {
            title: 'F'
        }
    ],
};

function search(data, node) {
    if (node.title === LOOK_FOR_VALUE)
        return node;

    if(node?.children) {
        for(let child of node.children) {
            if(search(data, child))
                return child;
        }
    }

    return null;
}

const LOOK_FOR_VALUE = 'Z';

const isValuePresent = search(LOOK_FOR_VALUE, tree) ? true : false;

console.log(`Computer looked into the tree for value '${
    LOOK_FOR_VALUE
}' and returned saying: ${isValuePresent ? 'IS HERE' : 'IS NOT HERE'}`);
