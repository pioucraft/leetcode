var isPalindrome = function (x) {
    y = x.toString();
    if (y == y.split("").reverse().join("")) return true;
    return false;
};
