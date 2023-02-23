function solution(my_string) {
    let ch = my_string.replace(/['a','e','i','o','u']/g, "");
    return ch;
}

// 1. replace() 사용