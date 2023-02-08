function solution(my_string, n) {
    let arr = [];
    for (let i = 0; i < my_string.length; i++) {
        for(let j = 0; j < n; j++) {
            arr.push(my_string[i]);
        }
    }
    let str = arr.join("");
    return str;
}

// 1. for문 사용
// 1-1. 문자열 중 하나의 문자만 뽑아내기 위한 for문
// 1-2. 하나만 뽑은 문자를 n번 반복하기 위한 for문
// 2. n번 반복한 문자를 하나의 배열로 만들기 위해 push() 함수 사용
// 3. 배열을 문자열로 바꾸기 위해 join() 함수 사용