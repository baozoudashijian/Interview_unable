/**
 * 
 * 给定一个经过N次encodeURIComponent的url1,请实现一个函数获取编码前的原始url
 * 举例： 加密后的url：https%25253A%25252F%25252Fwww.baidu.com，原始url: https://www.baidu.com
 * 
 * **/

const DecodeLink = (url) => {
    // TODO
    let res = []
    while(res.length < 2 || res[res.length - 1] !== res[res.length - 2]) {
        url = decodeURIComponent(url)
        res.push(url)
    }
    console.log(res)
    return url
}
console.log(DecodeLink('https%25253A%25252F%25252F'))