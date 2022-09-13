// reduce
// reduce可以有初始值也可以没有初始值
var arr = [[0,1], [2,3], [4,5]]

var onearr = arr.reduce(function(a, b) {
    return a.concat(b)
})

console.log(onearr)