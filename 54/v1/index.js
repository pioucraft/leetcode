var spiralOrder = function (matrix) {
    let answer = [];
    let direction = "right";

    let length = matrix.length;
    let height = matrix[0].length;

    let current = [0, 0];

    for (let i = 0; i < length * height; i++) {
        answer.push(matrix[current[0]][current[1]]);
        matrix[current[0]][current[1]] = undefined;

        if (
            matrix[current[0]][current[1] + 1] != undefined &&
            direction == "right"
        )
            current = [current[0], current[1] + 1];
        else if (
            (matrix[current[0] + 1] ?? [])[current[1]] != undefined &&
            direction == "down"
        )
            current = [current[0] + 1, current[1]];
        else if (
            (matrix[current[0] - 1] ?? [])[current[1]] != undefined &&
            direction == "left"
        )
            current = [current[0] - 1, current[1]];
        else if (
            matrix[current[0]][current[1] - 1] != undefined &&
            direction == "up"
        )
            current = [current[0], current[1] - 1];
        else if (matrix[current[0]][current[1] + 1] != undefined) {
            current = [current[0], current[1] + 1];
            direction = "right";
        } else if ((matrix[current[0] + 1] ?? [])[current[1]] != undefined) {
            current = [current[0] + 1, current[1]];
            direction = "down";
        } else if ((matrix[current[0] - 1] ?? [])[current[1]] != undefined) {
            current = [current[0] - 1, current[1]];
            direction = "left";
        } else if (matrix[current[0]][current[1] - 1] != undefined) {
            current = [current[0], current[1] - 1];
            direction = "up";
        }
    }
    return answer;
};
