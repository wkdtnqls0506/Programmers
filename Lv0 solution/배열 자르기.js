function solution(numbers, num1, num2) {
    let arr = numbers.slice(num1, num2+1);
    return arr;
}

// 1. 배열 자르는 함수 slice() 사용