function solution(n, t) {
    for (let i = 1; i <= t; i++) {
        n *=2
    }
    return n;
}

// 1.for문으로 *2 누적 (t만큼 반복)