function solution(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) cnt += i;
    }
    return cnt;
}

// 1. 약수구하기 - for문을 사용하여 빈 배열에 삽입
// 2. reduce()를 사용하여 약수를 모두 더한 값 return -> 하나의 케이스에서 런타임 에러 발생

// 요소들을 배열에 삽입하는 것이 아닌, 빈 변수 하나를 선언하여 if문에서 바로 누적 덧셈 실행