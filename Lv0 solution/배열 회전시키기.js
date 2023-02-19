function solution(numbers, direction) {
    if (direction === "left") {
        numbers.push(numbers.shift())
        return numbers;
    }
    else if (direction === "right") {
        numbers.unshift(numbers.pop());
        return numbers;
    }
}

// 1. left : 맨앞 요소 삭제 후 맨뒤에 다시 삽입
// 2. right : 맨뒤 요소 삭제 후 맨앞으로 다시 삽입

// shift() : 맨 앞 요소 삭제, 반환값은 삭제된 요소
// unshift() : 맨 앞에 요소 추가
// pop() : 맨 뒤 요소 삭제, 반환값은 삭제된 요소
// push() : 맨 뒤에 요소 추가