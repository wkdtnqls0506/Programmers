function solution(n) {
    let str = ""
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) str += "수"
        else str += "박"
    }
    return str
}

// 1. for문 : 0~n까지 반복
// 2. 인덱스가 짝수일 땐 "수", 홀수일 땐 "박" 추가