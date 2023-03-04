function solution(arr) {
    let cnt = 0;
    for (let i  = 0; i < arr.length; i++) {
        cnt += arr[i]
    }
    return cnt / arr.length;
    // return arr.reduce((a, b) => a + b)/arr.length
}

// reduce() 함수를 이용하여 더 간단히 구현 가능