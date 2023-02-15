function solution(age) {
    let answer = '';
    const stringAge = String(age);
    
    for (let i = 0; i < stringAge.length; i++) {
        let asciiAge = String.fromCharCode(stringAge.charCodeAt(i) + 49);
        answer += asciiAge;
    }
    return answer;
}

// 0. 숫자 0~9까지의 아스키코드 번호 : 48~57
// 0. 문자 a~j까지의 아스키코드 번호 : 97~106
// 1. 매개변수 age를 아스키코드로 변경하기 위해 String()으로 변환
// 2. for문으로 age 길이만큼 반복
// 3. 아스키코드로 변경한것을 문자로 출력하기 위해 다시 String.fromCharCode() 사용
// 3-1. 숫자와 문자의 아스키코드 번호가 +49 차이
// 4. 최종적으로 변환한 문자를 빈 string에 삽입하여 출력