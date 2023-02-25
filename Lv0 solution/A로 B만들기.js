function solution(before, after) {
    const bf1 = [...before].sort().join("");
    const af1 = [...after].sort().join("");
    return bf1 === af1 ? 1 : 0;
}

// 1. 두 매개변수를 오름차순 정렬
// 2. 삼항연산자를 이용하여 반환값 지정