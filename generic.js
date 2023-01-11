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
            title: 'D'
        }
    ],
};

function start(node) {
    console.log('Node: ', node.title);
    if(node.children) {
        node.children.forEach(function (child) {
            start(child);
        })
    }

}

start(tree);
