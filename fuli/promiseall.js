Promise.all([
    new Promise((resolve, reject) => {
        $.ajax({
            url: 'url1',
            success(data) {
                resolve(data)
            }
        })
    }),
    new Promise((resolve, reject) => {
        $.ajax({
            url: 'url2',
            success(data) {
                resolve(data)
            }
        })
    })
]).then(results => {
    // results是一个数组，分别是第一个请求返回的结果，第二个请求返回的结果，第三个请求返回的结果
})