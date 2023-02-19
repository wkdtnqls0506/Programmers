function solution(box, n) {
    const width = Math.floor(box[0]/n);
    const length = Math.floor(box[1]/n);
    const height = Math.floor(box[2]/n);
    
    return width * length * height;
}

// 1. 상자의 가로, 세로, 높이의 길이를 n으로 나눈 몫 구하기(나머지는 버림)
// 2. 3개의 몫 곱셈