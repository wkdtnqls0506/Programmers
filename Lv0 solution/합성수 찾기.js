function solution(n) {
    let cnt = 0;
    for (let i = 4; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                cnt++;
                break;
            }
        }
    }
    return cnt;
}

// 1. 첫번째 for문 : 4~n까지 (1, 2, 3은 소수이기 때문에 처음부터 제외)
// 2. 두번째 for문 : 1과 자기자신을 제외한 수로 나누었을 때 나머지가 0인 것이 존재할 때 
//                 카운트 후 for문 빠져나오기