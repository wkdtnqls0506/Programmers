function solution(n) {
    let result = [];
    for(let i = 1; i <= n; i++) {
        if (n % i === 0) result.push(i);
    }
    return result;
}

// 1. 1~n까지 n으로 나누어지는 수 배열에 담기