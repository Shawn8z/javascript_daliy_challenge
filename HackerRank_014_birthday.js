function birthday(s, d, m) {
    // Write your code here
    let blocks = s;
    let totalBlocks = blocks.length;
    let blockSum = d;
    let blockCount = m;
    let resultArr = [];
    let bracketArr = [];

    for (let i = 0; i < totalBlocks; i++) {
        let bracket = ""

        if (i + blockCount <= totalBlocks) {
            bracket = blocks.slice(i, i + blockCount);
            bracketArr.push(bracket);
        }
        
    }

    let bLength = bracketArr.length;
    for (let i = 0; i < bLength; i++) {
        let zVal = 0;
        let sum = bracketArr[i].reduce((pVal, cVal) => pVal + cVal, zVal);
        if (sum === blockSum) {
            resultArr.push(bracketArr[i]);
        }
        
    }

    return resultArr.length;
}






let str = "1 2 1 3 2".split(" ");
let arr = str.map((item) => parseInt(item, 10));
let d = 3;
let m = 2

birthday(arr, d, m);
