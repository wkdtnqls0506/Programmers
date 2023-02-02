function solution(my_string, letter) {
    let replace_word = my_string.replaceAll(letter, "");
    return replace_word;
}

// 1. replace() 함수를 사용하여 바꿔줄 문자를 공백으로 대체
// 모든 문자를 바꿔주고 싶으면 replaceAll() 함수 사용
// replace는 첫번째로 오는 문자열만 바꿔줌