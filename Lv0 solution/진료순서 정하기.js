function solution(emergency) {
    let arrDown = [...emergency].sort((a, b) => b - a);
    let newArr = [];
  
    for (let i = 0; i < emergency.length; i++) {
        let index = emergency.indexOf(arrDown[i]);
        newArr[index] = i+1;
    }
    return newArr;
}

// 1. 숫자가 큰 순서대로 내림차순 정렬 (원본 배열이 변하지 않도록 유의)
// 2. 배열의 길이만큼 for문 돌리기
// 3. 내림차순 정렬한 배열의 요소가 원본 배열의 몇번째 인덱스에 있는지 인덱스 번호 반환 (indexOf)
// 4. 반환받은 인덱스 번호를 새로 선언한 배열의 인덱스로 선언한 후 진료 순서 할당