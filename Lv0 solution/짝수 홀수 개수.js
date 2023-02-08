function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) even++;
        else odd++;
    }
    return [even, odd];
}

// 1. 케이스를 2개로 나누기 - 짝수 or 홀수
// 2. 짝수, 홀수일때의 변수를 따로 설정하여 짝수가 등장하면 even++, 홀수가 등장하면 odd++