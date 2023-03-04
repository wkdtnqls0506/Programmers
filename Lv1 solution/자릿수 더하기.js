function solution(n) {
    const num = n.toString().split("").reduce((a, b) => a + Number(b), 0)
    return num;
}

// 1. 숫자를 한자리씩 모두 분리 : toString(), split() 사용
// 2. reduce를 이용하여 누적 덧셈