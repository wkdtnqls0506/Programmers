function solution(numbers, k) {
    let cnt = 1;
    for (let i = 0; ; i+=2) {
        i %= numbers.length;
        const item = numbers[i];
        if (cnt === k) return numbers[i];
        cnt++;
    }
}

// 다시 풀어보기