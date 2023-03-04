function solution(s){
    const str1 = s.toLowerCase().split("").filter(n => n === "p");
    const str2 = s.toLowerCase().split("").filter(n => n === "y")
    return str1.length === str2.length;
}

// 1. 모두 소문자로 변경 후 filter() 사용 
// 1-1. "p"와 똑같을 때
// 1-2. "y"와 똑같을 때
// 2. 두 배열의 길이가 같을 경우 true 반환