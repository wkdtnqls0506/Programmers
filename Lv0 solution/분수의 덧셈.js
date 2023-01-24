function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    const top = numer1 * denom2 + numer2 * denom1;
    const bottom = denom1 * denom2;
    let min;
    
    // 분자와 분모를 비교하여 작은 값은 min에 삽입
    if(top < bottom) {
        min = top;
    }
    else {
        min = bottom;
    }
    
    // 분자와 분모가 최대공약수로 나누어 질 때 while문을 빠져나옴
    while(true) {
        if(top % min === 0 && bottom % min === 0) {
            return [top/min, bottom/min]
     }
        min -= 1;  // 나누어 떨어지지 않을 때 최대공약수의 값을 1씩 줄여 실행
    }
  
    return answer;
}

// 1. 분모 통분 후 분자 덧셈
// 2. 분자분모의 최대공약수로 나눗셈
// 2-1. 분자분모 중 작은 수 찾기
// 2-2. 작은 수를 분자분모에 나눗셈
// 2-2-1. 둘 다 나누어 떨어지면 그 나눈 수가 최대공약수
// 2-2-2. 안 나누어 떨어지면 작은 수를 -1 한 후 2-2로 돌아감