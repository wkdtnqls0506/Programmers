function solution(x, n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(x * i)
    }
    return arr;
}

// 1. n만큼 for문 돌리기