var canJump = function (nums) {
    let covered = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > covered) return false;
        covered = Math.max(covered, nums[i] + i);
    }
    return true;
};
