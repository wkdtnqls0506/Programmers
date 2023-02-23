function solution(numbers) {
    const n = numbers.length - 1;
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1] > numbers[n-1] * numbers[n] ? numbers[0] * numbers[1] : numbers[n-1] * numbers[n];
}

// 1. 내림차순 정렬 후
// 2. 맨 처음 원소 2개와 맨 뒤 원소 2개를 비교하여 더 큰 값 return : 삼항연산자 사용

// Math.max() 이용해서도 반환 가능