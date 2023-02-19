function solution(n) {
    const str = n.toString().split("");
    let cnt = 0;

    for (let i = 0; i < str.length; i++) {
        cnt += Number(str[i]);
    }
    return cnt;
}

// 1. 정수형 n을 문자형으로 변환 후 한글자씩 쪼개기 : toString(), split()
// 2. 쪼갠 문자를 정수형 함수로 감싼 후 for문을 이용하여 각 자릿수 모두 덧셈 : Number()