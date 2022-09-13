// 封装一个请求函数，实现可以设置最大请求次数，请求成功则不再请求，请求失败则继续请求直到超过最大次数

function request(url, body, succ, error, maxCount = 5) {
    return fetch(url, body)
        .then(res => succ(res))
        .catch(err => {
            if(maxCount <= 0) {
                return error('请求超时')
            }
            return request(url, body, succ, error, --maxCount)
        })
}