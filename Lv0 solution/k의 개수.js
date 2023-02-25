function solution(i, j, k) {
    let str = "";
    for(let n = i; n <= j; n++) {
        str += n;
    }
    str = Array.from(str);
    return str.filter(i => Number(i) === k).length;
}

// 1. i~j까지의 수를 하나의 문자열로 합치기
// 2. 합친 문자열을 필터링해주기 위하여 배열로 전환 후 조건에 해당하는 값만 추출하여 배열의 길이 구하기