function extraLongFactorials(n) {
    // Write your code here
    let initNum = BigInt(n);
    let result = 1n;
    let counter = initNum;

    while (counter !== 0n) {
        result *= counter;
        counter -= 1n;
    }

    console.log(result);
    let strResult = result.toString();
    console.log(strResult);
}

let val = extraLongFactorials(25);
console.log(val);