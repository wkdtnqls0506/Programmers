function solution(n) {
    for(let i = 1; i <= 1000000; i++) {
        if (i * i === n) return 1;
    }
    return 2;
}

// 1. 반복문으로 곱셈 반복