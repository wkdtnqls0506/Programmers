function solution(a, b) {
    const min = a < b ? a : b
    const max = a > b ? a : b
    let n = 0;
    for (let i = min; i <= max; i++) {
        n += i
    }
    return n;
}

// 1. a와 b의 대소관계를 정한 후 (삼항연산자)
// 2. for문을 돌려 덧셈 (min ~ max까지)

// 삼항연산자 말고 Math.min()과 Math.max()를 사용하면 더 간단