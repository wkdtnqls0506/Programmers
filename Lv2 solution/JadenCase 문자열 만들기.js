function solution(s) {
    let word = s.split(" ").map(n => n.charAt(0).toUpperCase() + n.substring(1).toLowerCase())
    return word.join(" ")
}

// 1. 공백을 기준으로 단어 분리
// 2. 제일 첫번째 문자는 대문자로 변경, 첫번째 문자 이외의 나머지 문자들은 소문자로 변경 후 합체

// 런타임 에러 : s.split(" ").map(n => n[0].toUpperCase() + n.slice(1).toLowerCase())
// 문자열을 인덱스로 접근하여 런타임 에러 발생 -> 문자열에서 사용하는 charAt()을 사용하면 런타임 에러 해결