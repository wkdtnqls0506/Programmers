function solution(n) {
    let cnt = 1;
    for (let i = 1; i <= 10; i++) {
        cnt *= i;
        if (cnt === n) return i;
        else if (cnt > n) return i-1;
    }
}

// 1. 1~10까지 팩토리얼 계산(반복문)
// 2. 하지만 만약 팩토리얼 값이 주어진 n보다 크거나 같아지면 반복문을 빠져나와 값 반환