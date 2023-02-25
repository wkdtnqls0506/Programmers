function solution(order) {
    const str = order.toString().split("").map(i => Number(i)).filter(n => n % 3 === 0 && n!==0);
    return str.length;
}

// 1. 매개변수로 들어온 값을 한자리씩 분해 후
// 2. filter로 n을 3으로 나누었을 때 나머지가 0인것만 추출 (n이 0일때도 제외해주기!)

// matchAll()을 사용하여 필터링 가능 - 더 간단