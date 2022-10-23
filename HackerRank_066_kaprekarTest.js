function kaprekarNumbers(p, q) {
    // Write your code here
    let start = p;
    let end = q;
    let resultArr = [];

    for (let i = start; i <= end; i++) {
        kaprekarTest(i);
    }

    function kaprekarTest(num) {
        let numStr = String(num);
        let numLength = numStr.length;
        if (numLength === 1) {
            numStr = "0" + numStr;
        }

        let sqResultStr = String(num ** 2);
        let sqResultLength = sqResultStr.length;
        let rightSideStartingIndex = sqResultLength - numLength;
        let rightSide = sqResultStr.slice(rightSideStartingIndex, sqResultLength);
        let leftSide = sqResultStr.slice(0, rightSideStartingIndex);

        if ( Number(leftSide) + Number(rightSide) == num ) {
            resultArr.push(num);
        }
    }   

    if (resultArr.length > 0) {
        output = resultArr.join(" ");
    } else {
        output = "INVALID RANGE";
    }
    
    console.log(output);
}

let arr1 = [400, 700];

let val = kaprekarNumbers(...arr1);
