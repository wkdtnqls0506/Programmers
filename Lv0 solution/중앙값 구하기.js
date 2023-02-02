function solution(array) {
    
    array.sort((a, b) => a - b);
 
    const mid_index = Math.floor(array.length / 2);
    return array[mid_index];
    
}

// 1. 배열을 오름차순으로 정렬 (sort()함수 사용)
// 2. 정렬 후 배열의 길이를 2로 나눈 값을 배열의 인덱스로 사용
// 2-1. 나눈 값이 실수로 나올 경우 Math.floor() 함수를 사용하여 소수점 버림