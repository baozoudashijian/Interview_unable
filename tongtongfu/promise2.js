// promise 是同步，then是异步
let obj = new Promise((resolve, reject) => {
    console.log('这是promise对象')
    resolve(1)
})
obj.then((res) => {
    console.log('结果:' + res)
})
console.log('哼哼')