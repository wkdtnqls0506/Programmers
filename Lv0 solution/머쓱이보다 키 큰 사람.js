function solution(array, height) {
    array.push(height);
    let cnt = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[array.length - 1] < array[i]) cnt++;
    }
    return cnt;
}

// 1. height를 배열의 맨 뒤에 삽입
// 2. for문으로 배열 전체를 돌면서, 맨 뒤에 삽입한 요소보다 크기가 크면 카운트 증가