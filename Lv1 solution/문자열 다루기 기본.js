function solution(s) {
    return (s.length === 4 || s.length === 6) && s == parseInt(s) 
}

// 1. 길이 조건과 숫자로만 이루어져 있는 조건식 return

// (s.length === 4 || s.length === 6) && Number(s) : 테스트11에서 오류
// 테스트11 케이스 : "1e22" -> e를 지수 표기법으로 인식하여 숫자로 판단해 오류 (isNaN()도 마찬가지)
// 지수는 정수가 아니기 때문에 이를 제대로 판단하려면 parseInt()를 사용하여 판단