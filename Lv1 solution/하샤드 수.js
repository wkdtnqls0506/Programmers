function solution(x) {
    const num = x.toString().split("").reduce((a, b) => a + Number(b), 0)
    return Number.isInteger(x / num)
}

// 1. x를 한자리씩 분리 후 덧셈 : 따로 변수 설정, reduce() 사용
// 2. Number.isInteger()을 사용하여 나누어 지는 값이 정수인지 아닌지 판별