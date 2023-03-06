function solution(my_string) {
    const arr = my_string.match(/[0-9]+/g)
    return arr ? arr.map(Number).reduce((a, b) => a + b, 0) : 0;
}