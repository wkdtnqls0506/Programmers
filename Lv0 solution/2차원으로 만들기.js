function solution(num_list, n) {
    let result = [];
    for (let i = 0; i < num_list.length;) {
        let save = [];
        for(let j = 0; j < n; j++) {
            save.push(num_list[i]);
            i++;
        }
        result.push(save);
    }
    return result;
}

// 1. num_list를 n개씩 꺼내 새로운 배열에 저장
// 2. n개씩 짝지어진 배열을 또 다른 빈배열에 삽입