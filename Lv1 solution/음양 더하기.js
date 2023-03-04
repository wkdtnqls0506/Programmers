function solution(absolutes, signs) {
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === false) {
            absolutes[i] = -absolutes[i]
        }
    }
    return absolutes.reduce((a, b) => a + b, 0)
}

// 1. for문 사용 : signs가 false인 경우, 해당 absolutes 값에 "-" 부호 붙여주기
// 2. reduce()를 사용하여 덧셈 값 반환

// reduce()와 삼항연산자 사용
// ex) return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0)