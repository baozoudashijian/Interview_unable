function null2str(data) {
    if (typeof data != 'object' || data === null || data === 'null' || data === undefined) {
        data = '';
        return data;
    } else {
        for (let x in data) {
            if (data[x] === null || data[x] === 'null' || data[x] === undefined) { // 如果是null 把直接内容转为 ''
                data[x] = '';
            } else {
                if (Array.isArray(data[x])) { // 是数组遍历数组 递归继续处理
                    data[x] = data[x].map(z => {
                        // console.log(z)
                        return null2str(z);
                    });
                }
                if (typeof (data[x]) === 'object') { // 是json 递归继续处理
                    data[x] = null2str(data[x])
                }
            }
        }
        return data;
    }
}
let data = {
    a: [null, {s: null, t: undefined, v: 200}, 100],
    b: {k: undefined, r: null, w: [1, 2, {s: null, t: undefined, v: 200}, 100]}
}
console.log(null2str(data))