var myPow = function (x, n) {
    if (n == 0) return 1;
    if (n == 1) return x;
    if (n < 0) return 1 / myPow(x, -n);

    let half = myPow(x, Math.floor(n / 2));
    if (Math.floor(n / 2) != n / 2) return half * half * x;
    return half * half;
};
