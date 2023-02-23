function solution(my_string) {
    // const arr = my_string.split("");
    // const arr2 = arr.filter(n => !isNaN(Number(n))).map(i => Number(i));
    // arr2.sort((a, b) => a - b);
    // return arr2;
    
    return my_string.split("").filter(n => !isNaN(n)).map(i => Number(i)).sort((a, b) => a - b);
}

// 1. isNaN()을 사용하여 숫자인지 문자인지 판별
// 1-1. filter()를 사용하여 숫자인것만 뽑아 새로운 배열 생성
// 2. 문자열로 담긴 숫자들을 map()을 사용하여 Number로 변환
// 3. 숫자로 변환한 배열을 sort()를 사용하여 오름차순 정렬