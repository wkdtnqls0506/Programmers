function solution(spell, dic) {
    const a = spell.sort().join("")
    const b = dic.map(i => i.split("").sort().join(""))  
    return b.filter(n => n === a).length === 0 ? 2 : 1
}

// 1. spell : 오름차순 정렬 후 join()으로 합체
// 1-1. dic[0~] : 글자 하나하나 분리하여 오름차순 정렬 후 join()으로 합체
// 2. filter()를 이용하여 새롭게 정의한 두 배열 값 중 같은 것이 있으면 1, 아니면 2 return


// every(~) : 배열 안의 모든 요소가 주어진 판별함수를 통과하는지 테스트, Boolean값 반환
// includes(~) : 배열이 특정 요소를 포함하고 있는지 판별
// ex) dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;