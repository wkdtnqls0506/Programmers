function solution(cipher, code) {
    let ch = cipher.split("")
    let arr = []
    for (let i = code; i <= cipher.length; i += code) {
        arr.push(ch[i - 1])
    }
    return arr.join("").toString()
}

// 1. code부터 문자열의 길이까지 반복문 실행
// 2. code 간격만큼 떨어져 있는 인덱스만 추출 (인덱스는 0부터 시작하기 때문에 -1)
// 3. 해당 인덱스에 해당하는 값을 빈 배열에 삽입 후 다시 문자열로 전환하여 return

// 굳이 배열로 바꿔줄 필요없이 빈 문자열을 선언하여 그 문자열에 삽입 (+=) or
// filter() 사용 - 더 간단하게 구현가능
// ex) return cipher.split("").filter((v, i) => (i+1) % code === 0).join("")