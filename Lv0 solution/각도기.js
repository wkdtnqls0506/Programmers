function solution(angle) {
    if(0 < angle && angle < 90) return 1;
    else if (angle === 90) return 2;
    else if (90 < angle && angle < 180) return 3;
    else return 4;
}

// 1. 케이스 4개로 분류 - 예각, 직각, 둔각, 평각 (if문 사용)