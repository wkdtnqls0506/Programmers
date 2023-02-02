function solution(numbers) {
    const result = numbers.reduce((prev, cur) => {
        return prev + cur;
    }, 0);
    
    return result / numbers.length;
}

// 1. reduce() 함수를 이용하여 배열의 덧셈
// 2. return 배열의 덧셈 / 배열의 길이