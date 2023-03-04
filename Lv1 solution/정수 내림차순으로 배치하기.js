function solution(n) {
    return n.toString().split("").sort((a, b) => b - a).join("") * 1
}

// 1. 하나의 n을 한자리씩 분리 후
// 2. 내림차순 정렬 사용 : sort((a, b) => b - a)