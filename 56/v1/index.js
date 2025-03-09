var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [intervals[0]];

    intervals.forEach((element) => {
        if (merged[merged.length - 1][1] < element[0]) {
            merged.push(element);
        } else {
            merged[merged.length - 1][1] = Math.max(
                element[1],
                merged[merged.length - 1][1]
            );
        }
    });
    return merged;
};
