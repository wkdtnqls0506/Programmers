function solution(balls, share) {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial (n) {
    let cnt = BigInt(1);
    for (let i = 1; i <= n; i++) {
        cnt *= BigInt(i);
    }
    return cnt;
}

// BigInt() 사용 : 2^53 -1 보다 큰 정수값 표현가능