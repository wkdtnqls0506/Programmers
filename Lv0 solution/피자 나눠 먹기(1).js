function solution(n) {
    if (n % 7 === 0) return (n / 7);
    else return Math.floor(n / 7) + 1;
}

// 1. n이 7로 나누어 떨어지면 return 몫
// 1-1. 7로 나누어 떨어지지 않으면 return 몫+1
