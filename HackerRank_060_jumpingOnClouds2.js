function jumpingOnClouds(c) {
    // Write your code here
    let arrLength = c.length;
    let totalJumps = 0;

    for (let i = 0; i < arrLength - 1; i++) {

        if (isClearToJump(i)) {
            totalJumps += 1;
            i += 1;
        } else {
            totalJumps += 1;
        }
    }

    function isClearToJump(index) {
        
        if (c[index + 2] != 1) {
            return true;
        } else {
            return false;
        }

    }

    return totalJumps;
}

let arr = [0, 0, 1, 0, 0, 1, 0];
jumpingOnClouds(arr);