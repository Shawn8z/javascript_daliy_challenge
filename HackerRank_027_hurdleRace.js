function hurdleRace(k, height) {
    // Write your code here
    let result = 0;

    let maxHeight = Math.max(...height);
    result = maxHeight - k

    if (result < 0) {
        return 0;
    }

    return result;
}



let jumpHeight = 4;
let heights = [1, 6, 3, 5, 2];

hurdleRace(jumpHeight, heights);