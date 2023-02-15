function solution(hp) {
    const captin = Math.floor(hp / 5);
    const mid = Math.floor((hp % 5) / 3);
    const low = Math.floor((hp % 5) % 3);
    
    return captin + mid + low;
}

// 1. 변수 3개 설정
// 2. 변수 모두 더해서 return