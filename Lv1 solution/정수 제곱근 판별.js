function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1)**2 : -1;
}

// 1. 삼항연산자를 사용하여 return
// 1-1. Math.sqrt()가 정수일 경우 : Number.isInteger()로 판단
// 1-2. 아닌 경우 -1 return