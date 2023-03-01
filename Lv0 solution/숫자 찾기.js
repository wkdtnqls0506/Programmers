function solution(num, k) {
    const n = num.toString().split("").filter(v => Number(v) === k)
    if (n.length !== 0) return num.toString().split("").indexOf(n[0]) + 1;
    else return -1;
}


// 1. 숫자를 한자리씩 분리 후 filter()로 조건에 맞게 분리
// 2. if~else 문으로 해당하는 수가 있으면 자리 수를 (n[0] : 여러개가 있을 경우 가장 처음 나타나는 자리 반환)
//    아니면 -1을 반환하는 조건문 설정

// return num.toString().split("").map(v => Number(v)).indexOf(k) + 1 || -1