function breakingRecords(scores) {
    // Write your code here
    let maxRecord = { highScore: 0, updateTimes: 0};
    let minRecord = { lowScore: 0, updateTimes: 0};
    let numOfGames = scores.length;

    maxRecord.highScore = scores[0];
    minRecord.lowScore = scores[0];


    for (let i = 1; i < numOfGames; i++) {
        let score = scores[i];
        console.log(score);

        if (score > maxRecord.highScore) {
            maxRecord.highScore = score;
            maxRecord.updateTimes += 1;
        }

        if (score < minRecord.lowScore) {
            minRecord.lowScore = score;
            minRecord.updateTimes += 1;
        }
    }

    return [maxRecord.updateTimes, minRecord.updateTimes];
}


let val = "10 5 20 20 4 5 2 25 1".split(" ");
let arr = val.map((item) => parseInt(item, 10));
console.log(typeof arr[0]);
console.log(arr);
let out = breakingRecords(arr);
console.log(out);