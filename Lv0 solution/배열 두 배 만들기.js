function solution(numbers) {
    var answer = [];    
    for (let i = 0 ; i < numbers.length; i++ ) {
        answer.push(numbers[i] * 2);
    }
    return answer;
}

// 1. 각 원소에 *2를 수행
// 2. 두배한 원소를 기존 배열에 삽입 - push() 함수 사용
// 3. 입력받은 원소의 길이만큼 반복문 실행 후 answer 반환 (2배한 원소가 들어있음)