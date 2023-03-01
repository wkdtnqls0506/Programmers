function solution(n) {
    let i = 2;
    let arr = []
    while (n !== 1) {
        if (n % i === 0) {
            n /= i
            arr.push(i)
        }
        else {
            i++;
        }
    }
    return Array.from(new Set(arr));
}

// 1. while문 활용
// 1-1. 2로 나누어 질 경우 : n을 i로 나눈 값의 몫으로 업데이트, push()로 배열에 담기
// 1-2. 아닐 경우 : 값을 증가시켜 나머지를 0을 만드는 것만 배열에 저장
// 2. 배열에 담긴 값에서 중복을 제거하기 위해 set() 함수 사용