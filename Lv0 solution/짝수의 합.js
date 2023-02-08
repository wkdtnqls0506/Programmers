function solution(n) {
    let a = 0;
    for(let i = 0; i <= n; i+=2) {
        a += i;
    }
    return a;
}

// 1. 주어진 n만큼 for문 반복