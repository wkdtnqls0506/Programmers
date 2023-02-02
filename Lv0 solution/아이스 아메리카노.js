function solution(money) {
    let americano = Math.floor(money / 5500);
    let change = money - (5500 * americano);
    return [americano, change];
}

// 1. 아메리카노 잔수 구하기
// 2. 구한 아메리카노 잔수를 이용하여 잔돈 구하기