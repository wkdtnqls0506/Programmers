function solution(a, b) {
    const arr = a.map((x, i) => x * b[i]);
    return arr.reduce((a, b) => a + b, 0)
}

// 1. map()을 이용하여 두 배열 곱셈
// 2. reduce()를 이용하여 배열 전체 덧셈

// reduce()로 한번에 작성가능
// return a.reduce((x, y, i) => x += y * b[i], 0)