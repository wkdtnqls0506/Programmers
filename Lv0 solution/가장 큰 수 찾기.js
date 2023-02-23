function solution(array) {
    const ch = [...array].sort((a, b) => b - a)
    return [ch[0], array.indexOf(ch[0])]
}

// 1. 내림차순 정렬 후 맨 앞 인덱스 반환 (얕은 복사로 정렬)
// 2. indexOf()를 사용하여 해당 인덱스 반환

// Math.max(...array)를 새로운 변수에 할당하여 풀이 - 정렬을 안해도 됨