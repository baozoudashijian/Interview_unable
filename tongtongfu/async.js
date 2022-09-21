async function getData2() {
    console.log(2)
    throw new Error('123')
    return '这个是async的数据'
}

async function test2() {
    console.log(1)
    try {
        var d = await getData2()
    } catch (error) {
        
    }
    console.log(d)
    console.log(3)
}
test2()