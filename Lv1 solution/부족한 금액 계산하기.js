function solution(price, money, count) {
    let result = 0;
    for (let i = 1; i <= count; i++) {
        result += price * i
    }
    return result > money ? result - money: 0
}

// 1. price의 배수 구하기 (~count까지) : for문 이용
// 2. 삼항연산자로 조건에 맞는 값 return