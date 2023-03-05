function solution(my_str, n) {
    let ch = [];
    for (let i = 0; i < my_str.length; i+=n) {
        ch.push(my_str.slice(i, i + n))
    }
    return ch
}

// 1. for문 사용 : n만큼 증가시키기
// 2. n의 길이만큼 분리시킨 문자열을 빈 배열에 차례로 삽입 : slice()로 분리