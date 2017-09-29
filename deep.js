var a = {
    id: 1, url: '00001', child: [
        { id: 2, url: '00002' },
        {
            id: 3, url: '00003', child: [
                { id: 5, url: '00005' },
                { id: 6, url: '00006',child:[{id:7,url:'00007'}] }
            ]
        },
        { id: 4, url: '00004' },
    ]
}
var deepClone = function deepClone(obj) {
    var result = {
        path: obj.url, id: obj.id
    }
    if (obj.child) {
        result.child = []
        obj.child.forEach(function (item) {
            result.child.push(deepClone(item))
        })
    } 
    return result
}

let out = deepClone(a)
console.log(JSON.stringify(out))
