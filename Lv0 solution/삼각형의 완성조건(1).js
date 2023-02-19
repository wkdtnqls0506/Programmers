function solution(sides) {
    sides.sort((a, b) => b - a);
    return sides[0] < sides[1] + sides[2] ? 1 : 2;
}

// 1. 내림차순으로 정렬
// 2. 정렬 후 삼항연산자를 사용하여 조건에 맞는 값 return