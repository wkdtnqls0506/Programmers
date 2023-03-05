function solution(s) {
    const num = s.split(" ").map(Number)
    return [Math.min(...num), Math.max(...num)].join(" ")
}

// 1. 공백 기준으로 나눈 후
// 2. Math.min() & Math.max()를 이용하여 최대 최소값 도출 -> 배열이니 문자열로 다시 join(" ")