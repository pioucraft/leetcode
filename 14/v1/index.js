var romanToInt = function (s) {
    let result = 0;
    let numbers = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    s.split("").forEach((num, i, arr) => {
        if (numbers[num] < numbers[arr[i + 1]]) result -= numbers[num];
        else result += numbers[num];
    });
    return result;
};
