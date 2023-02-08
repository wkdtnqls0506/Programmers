function solution(n, k) {
    let total = n * 12000 + k * 2000;
    if (n < 10) return total;
    else {
        let service = Math.floor(n / 10);
        return n * 12000 + (k - service) * 2000;
    }
}

// 1. 케이스 2개로 나누기 - n이 10을 넘는 경우와 안 넘는 경우
// 2. n이 10을 넘어갈 경우 n/10 몫의 값만큼 음료 개수에서 뺀 후 계산