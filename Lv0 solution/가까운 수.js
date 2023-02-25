function solution(array, n) {
    const little = array.sort((a, b) => a - b).map(i => Math.abs(i - n))
    const a = little.indexOf(Math.min(...little))
    return array[a]
}

// 1. |배열값 - n|이 가장 작은 값의 인덱스 찾기
// 2. 절댓값이 제일 작은 수가 여러개일 경우 : 처음부터 배열을 오름차순으로 정렬 후 절댓값 적용