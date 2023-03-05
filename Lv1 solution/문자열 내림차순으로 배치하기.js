function solution(s) {
    return s.split("").sort().reverse().join("")
}

// 1. 배열로 만든 후 sort() 함수 사용
// 2. 오름차순 정렬 후 reverse()로 뒤집어주기