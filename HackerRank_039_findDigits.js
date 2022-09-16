function findDigits(n) {
    // Write your code here
    let numStr = n + "";
    let strArr = numStr.split("");
    let numArr = strArr.map((item) => Number(item));
    let suitableItem = [];

    for (let i = 0; i < numArr.length; i++) {
        
        if (numArr[i] == 0) {
            continue;
        }

        if (n % numArr[i] == 0) {
            suitableItem.push(numArr[i])
        }
    }

    return suitableItem.length;
}

let val = findDigits(1012);
console.log(val);