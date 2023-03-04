function solution(phone_number) {
    const back = phone_number.slice(-4)
    let str = ""
    for (let i = 0; i < phone_number.length - 4; i++) {
        str += "*"
    }
    return str + back;
}

// 1.slice()로 뒷자리 4개만 추출
// 2. for문으로 뒷자리 4개를 제외한 나머지 번호의 길이만큼 빈 문자열에 * 삽입
// 3. *을 삽입한 문자열과 slice()로 추출한 4자리 합체

// repeat()과 slice()를 사용하여 한줄로 작성가능
// ex) "*".repeat(phone_number.length - 4) + phone_number.slice(-4)