function solution(my_string) {
    let str = my_string.split("");
    let arr = [];
    let num = 0;
    let a = 0;
    
    for(let i = 0; i < str.length; i++) {
        arr.push(str[i].charCodeAt());
        if (48 <= arr[i] && arr[i] <= 57) {
            num = Number(String.fromCharCode(arr[i]));
            a += num;
        }
    }
    return a;
}

// 1. 문자열을 모두 한자리로 쪼개기
// 2. 아스키코드를 이용하여 문자/숫자 판별
// 3. 숫자로 판별된 것을 다시 문자형으로 변환 후 덧셈