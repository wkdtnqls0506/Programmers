function solution(numbers) {
    return 45 - numbers.reduce((a, b) => a + b, 0)
}

// 1. 0~9까지의 덧셈 - numbers 배열의 덧셈