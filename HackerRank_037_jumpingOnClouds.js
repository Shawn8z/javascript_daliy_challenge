function jumpingOnClouds(c, k) {
    let energy = 100;
    let cloudCount = c.length;
    let cloudArr = c;
    let isDone = false;
    let tempIndex = 0;

    while (!isDone) {
        tempIndex = (tempIndex + k) % cloudCount;

        if (!cloudArr[tempIndex]) {
            energy -= 1;
        } else {
            energy -= 1 + 2;
        }
        
        if (tempIndex == 0) {
            isDone = true;
        }
    }

    return energy;
}



c = [0, 0, 1, 0, 0, 1, 1, 0]

let val = jumpingOnClouds(c, 2);
console.log(val);