const DecodeLink = (url) => {
    // TODO
    let res
    while (res !== url) {
        res = url
        url = decodeURIComponent(url)
    };
    return res
}
console.log(DecodeLink('https%25253A%25252F%25252F'))
