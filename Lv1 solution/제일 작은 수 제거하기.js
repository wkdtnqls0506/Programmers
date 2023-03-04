function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length === 0 ? [-1] : arr;
}

// 1. Math.min()을 사용하여 제일 작은 수를 삭제 : splice() 사용
// 2. arr의 길이에 따라 [-1] or arr 반환 : 삼항연산자 사용