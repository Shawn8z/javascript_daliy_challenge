function birthdayCakeCandles(candles) {
    // Write your code here
    let maxNum = Math.max(...candles);
    let maxNumCount = 0;
    let candlesCount = candles.length;

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == maxNum) {
            maxNumCount += 1;
        }
    }

    return maxNumCount;
}


let val = [3, 2, 1, 3];
let result = birthdayCakeCandles(val);
console.log(result);


