function a() {
    return 1
}

console.log(a() == 1)

async function a2() {
    return 1
}
console.log(a2())
console.log(a2() == 1)

function * a3() {
    return 1
}
console.log(a3)
console.log(a3() == 1)

// a2 返回Promise对象
// a3 返回Generator对象
//