function solution(array) {
    let sortedArr = array.sort((a, b) => a - b);

    let cnt = 0;  // 배열의 길이만큼 반복
    let frequentNum = -1; // 최빈값(등장할 수 없는 값으로 설정)
    let frequentRepeat = 0;  // 최빈값이 몇번 반복해서 된 최빈값인지
    let repeatCnt = 0;  // 반복해서 들어온 숫자의 개수 세기
    let beforeNum = -1;  // 이전 숫자
    let isDupFreq = false;  // 최빈값이 중복되었는지 확인하는 변수
    while (cnt < array.length) {  // 처음부터 끝까지 배열을 돌아야한다
        if (beforeNum !== array[cnt]) {  // 만약 이전 숫자와 지금 꺼낸 숫자가 다른 경우
            repeatCnt = 1;         
        } else {  // 꺼낸 숫자가 이전 숫자와 같을 경우
            repeatCnt += 1;  // 반복횟수 1 증가
        }
        
        if (repeatCnt === frequentRepeat && frequentNum !== array[cnt]) {
            isDupFreq = true; // 최빈값이 중복되었을때 true
        }
        
        if (repeatCnt > frequentRepeat) {
            frequentNum = array[cnt]; // 최빈값은 지금 돌고 있는 숫자
            frequentRepeat = repeatCnt; 
            isDupFreq = false;
        }
        beforeNum = array[cnt];
        cnt += 1;
    }
    if(isDupFreq) return -1;  // 최빈값이 중복이 됐다면 -1을 return
    return frequentNum;
}

// 1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
// 2. 최빈값을 그때그때 기록