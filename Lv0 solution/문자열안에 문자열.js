function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}

// 1. includes()를 사용하여 판별
// 2. 삼항연산자를 이용하여 1 or 2 return