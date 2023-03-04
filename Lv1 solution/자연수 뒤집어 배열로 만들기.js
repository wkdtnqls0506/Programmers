function solution(n) {
    const num = n.toString().split("").map(n => Number(n))
    return num.reverse();
}

// 1. n을 한글자씩 분리 후 배열의 향태로 전환
// 2. reverse() 함수를 이용해서 배열 뒤집기