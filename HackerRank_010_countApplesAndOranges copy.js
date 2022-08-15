function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let houseStart = s;
    let houseEnd = t;

    let appleTreePos = a;
    let orangeTreePos = b;

    let applePosArr = [];
    let appleLength = apples.length;

    for (let i = 0; i < appleLength; i++) {
        let applePos = appleTreePos + apples[i];
        applePosArr.push(applePos);
    } 

    let orangePosArr = [];
    let orangeLength = oranges.length;

    for (let i = 0; i < orangeLength; i++) {
        let orangePos = orangeTreePos + oranges[i];
        orangePosArr.push(orangePos);
    }

    let appleCount = 0;
    for (let i = 0; i < appleLength; i++) {
        if (applePosArr[i] >= houseStart && applePosArr[i] <= houseEnd) {
            appleCount += 1;
        }
    }

    let orangeCount = 0;
    for (let i = 0; i < orangeLength; i++) {
        if (orangePosArr[i] >= houseStart && orangePosArr[i] <= houseEnd) {
            orangeCount += 1;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}


countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
