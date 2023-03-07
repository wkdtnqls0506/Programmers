function solution(s) {
    const arr = s.split(" ")
    while (arr.includes("Z")) {
        arr.splice(arr.indexOf("Z") - 1, 2)
    }
    return arr.reduce((a, b) => a + Number(b), 0)
}

// 1. 공백을 기준으로 나누기 -> 배열 형태
// 2. while문 사용 - 배열에 "Z"가 없을 때 종료, splice()를 사용하여 "Z"가 존재하는 인덱스의 요소와 "Z" 앞의                     숫자 제거
// 3. 조건을 만족하는 배열로 만든 후 reduce()로 누적 덧셈 값 return