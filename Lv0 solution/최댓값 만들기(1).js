function solution(numbers) {
    const arr = numbers.sort((a, b) => b - a);
    return arr[0] * arr[1];
}

// 1. 배열 내림차순 정렬 후 맨 앞 2개 곱셈