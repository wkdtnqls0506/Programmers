function solution(left, right) {
    let n = 0;
    for (let i = left; i <= right; i++) {
        let cnt = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) cnt++;
        }
        cnt % 2 === 0 ? n+=i : n-=i;
    }
    return n;
}

// 1. left ~ right까지 for문
// 2. 약수구하기 -> 나누어 떨어질때마다 카운트 증가 : for문
// 3. 삼항연산자로 카운트가 짝수일 땐 덧셈, 홀수일 땐 뺄셈

// 제곱근이 정수이면 약수의 개수가 홀수이다!!!!!!!!