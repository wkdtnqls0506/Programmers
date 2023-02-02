function solution(slice, n) {
    if (n < slice) return 1;
    
    if (n % slice === 0) return n/slice;
    else if (n % slice !== 0) return Math.floor(n/slice) + 1;
    
}

// <조건별로 나누기>
// 1. n이 slice보다 작을 경우 1판의 피자
// 2. n이 slice로 나누어 떨어지면 return n / slice
// 3. n이 slice로 나누어 떨어지지 않으면 return 몫 + 1