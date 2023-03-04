function solution(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 1) return i;
    }
}

// 1. for문 사용 : 1~n까지 반복
// 2. if문으로 조건을 만족하는 i를 return