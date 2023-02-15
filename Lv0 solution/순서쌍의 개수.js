function solution(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0)  arr.push(i);
    }
    return arr.length;
}

// 1. n의 약수 구하기 - for문으로 n만큼 반복
// 2. 1~n까지 n으로 나누어 떨어지는 경우의 값의 개수를 return