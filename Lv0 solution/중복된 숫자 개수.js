function solution(array, n) {
    let cnt = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] === n) cnt++
    }
    return cnt;
}

// 1. 주어진 배열 안에 n이 있으면 카운트 증가