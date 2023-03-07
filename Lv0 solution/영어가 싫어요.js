function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for (let i = 0; i < arr.length; i++) {
        numbers = numbers.split(arr[i]).join(i)
    }
    return Number(numbers)
}

// 1. zero ~ nine이 담긴 배열 선언
// 2. 문자열 numbers를 zero ~ nine 기준으로 나눠준 후 그에 맞는 숫자로 전환