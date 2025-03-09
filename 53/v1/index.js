var maxSubArray = function (nums) {
    let max = -Infinity;
    let current = 0;
    nums.forEach((element) => {
        current += element;
        if (element > max && element > current) current = element;
        if (current < 0 && current < max && max > 0) current = 0;
        if (current > max) max = current;
    });
    return max;
};
