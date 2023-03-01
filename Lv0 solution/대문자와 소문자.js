function solution(my_string) {
      let str = ""
      for (let i = 0; i < my_string.length; i++) {
          if (my_string[i] === my_string[i].toUpperCase()) { // 대문자일 경우
                str += my_string[i].toLowerCase(); 
          }  
          else if (my_string[i] === my_string[i].toLowerCase()) {
              str += my_string[i].toUpperCase();
          }
      }
    return str;
    
    // return my_string.split("").map(i => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join("")
}

// 1. 대문자일 경우 소문자로 변경 : .toLowerCase()
// 2. 소문자일 경우 대문자로 변경 : .toUpperCase()

// map과 삼항연산자를 함께 사용하면 더 간단하게 구현 가능