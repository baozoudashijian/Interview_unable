for(var i=0; i<3; i++) {
    setTimeout(() => console.log(i), 1);
}

for(let i=0; i<3; i++) {
    setTimeout(() => console.log(i), 1);
}

// 输出 3，3，3，0，1，2