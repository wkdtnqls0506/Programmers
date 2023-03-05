function solution(num) {
    let cnt = 0;
    while (num !== 1 && cnt !== 500) {
        num % 2 === 0 ? num /= 2 : num = num * 3 + 1;
        cnt++
    }
    return cnt !== 500 ? cnt : -1;
}

// 1. while문 사용 : num이 1이 아닐때, cnt가 500이 아닐때까지 반복
// 2. 삼항연산자 사용하여 짝수 or 홀수에 따라 연산 조건 다르게
// 3. 카운트 증가시키기