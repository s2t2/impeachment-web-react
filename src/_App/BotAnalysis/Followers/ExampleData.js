
var data0 = {
    nodes:[
        {"id":"node1", "__label":"User1"},
        {"id":"node2", "__label":"User2"},
    ],
    links:[
        {"id":"link1", "source":"node1", "target":"node2"}
    ]
}

var data1 = {
    nodes:[
        {"id":"node1", "__label":"User1"},
        {"id":"node3", "__label":"User3"},
    ],
    links:[
        {"id":"link1", "source":"node1", "target":"node3"}
    ]
}

module.exports = {data0, data1}
