function solution(arr, divisor) {
    const div = arr.filter(n => n % divisor === 0).sort((a, b) => a - b);
    const num = [-1];
    if (div.length > 0) return div
    else return num;
}

// 1. filter() 사용으로 divisor로 나누어지는 값만 추출
// 2. sort()로 오름차순 정렬
// 3. if~else 문을 사용하여 배열의 길이가 0 이상일때와 아닐때로 분류

// if~else 문 대신 삼항연산자를 사용하면 더 간단히 구현 가능
// return arr.filter(n => n % divisor === 0).length === 0 ? [-1] : arr.filter(n => n % divisor === 0).sort((a, b) => a - b)