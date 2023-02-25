function solution(array) {
    return array.join("").split("").filter(i => Number(i) === 7).length
}

// 1. 배열을 한글자씩 쪼개기 위해 문자열로 합친 후 다시 split()로 배열 만들어주기
// 2. 하나씩 쪼개진 수가 7과 같은 것만 필터링 : filter()