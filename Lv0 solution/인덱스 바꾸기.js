function solution(my_string, num1, num2) {
    let arr1 = my_string.split("")
    let n1 = arr1[num1]
    let n2 = arr1[num2]
    
    arr1[num1] = n2
    arr1[num2] = n1
    
    return arr1.join("")
    console.log(arr1.join(""));
}

// 1. 배열로 변환 후 새로운 변수에 [num1], [num2]에 해당하는 값 새로 저장
// 2. 새로운 변수를 바꿔야 할 문자에 새롭게 할당
// 3. 다시 join()을 사용하여 문자열로 변환

// 구조 분해 할당을 이용하면 좀 더 짧은 코드 가능
// [arr1[num1], arr1[num2]] = [arr1[num2], arr1[num1]]