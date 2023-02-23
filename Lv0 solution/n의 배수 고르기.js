function solution(n, numlist) {
    let arr = [];
    for (let i = 0; i < numlist.length; i++) {
        if (numlist[i] % n === 0) arr.push(numlist[i]);
    }
    return arr;
}

// 1. n으로 나누어 지는것만 배열에 담기