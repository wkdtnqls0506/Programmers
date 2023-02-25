function solution(my_string) {
    const ch = my_string.toLowerCase().split("").sort().join("")
    return ch
}

// 1. 문자열을 모두 소문자로 변경(toLowerCase)후 
// 2. 알파벳을 차례대로 정렬하기 위해 아스키코드로 변경(.charCodeAt)
// 3. 아스키코드를 기준으로 오름차순 정렬 : sort((a, b) => a - b)
// 4. 정렬된 아스키코드를 다시 문자로 변경 후 값 반환 (String.fromCharCode(n))

// 자바스크립트의 sort()는 기본적으로 문자 정렬!
// sort()를 사용하면 문자 정렬이 되므로 굳이 아스키코드로 변환할 필요X