function solution(n) {
    let max = n > 6 ? n : 6;
    let num = 0;
    
    for(let i = 0; i <= max; i++) {
        if (n % i === 0 && 6 % i ===0) {
            num = i;
        }
    }
    
    let pizza = (n * 6 / num) / 6;
    return pizza;
}

// 1. n과 6의 최소공배수 구하기 -> (n * 6) / 최대공약수 = 최소공배수
// 2. return 최소공배수 / 6