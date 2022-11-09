const DecodeLink = (url) => {
    let res = decodeURIComponent(url)
    if(res !== url) {
        DecodeLink(decodeURIComponent(url))
    }
    return res
    
}
console.log(DecodeLink('https%25253A%25252F%25252F'))