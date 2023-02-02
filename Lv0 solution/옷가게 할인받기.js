function solution(price) {
    if (100000 <= price && price < 300000) {
        return Math.floor(price * (1 - 0.05));
    }
    else if (300000 <= price && price < 500000) {
        return Math.floor(price * (1 - 0.1));
    }
    else if (price >= 500000) return Math.floor(price * (1 - 0.2));
    
    else return price;
}

// 할인별로 케이스 나누어서 풀기
// 10만원 이하인 케이스도 생각