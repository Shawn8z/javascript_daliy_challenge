function pickingNumbers(a) {
    // Write your code here
    let inputArr = a;
    let arrLength = inputArr.length;
    let comboArrLengths = [];

    for (let i = 0; i < arrLength; i++) {
        let numPoolArr = [];

        if (i === 0) {
            numPoolArr = inputArr.slice(1);
        }

        if (i === arrLength) {
            numPoolArr = inputArr.slice(0, arrLength - 1);
        }
        
        let tempArr1 = inputArr.slice(0, i);
        let tempArr2 = inputArr.slice(i+1);
        numPoolArr = tempArr1.concat(tempArr2);
        // console.log(numPoolArr);

        let result = numPoolArr.filter( (item) => inputArr[i] - item <= 1 && inputArr[i] - item >= 0);
        
        if (result.length > 0) {
            result.push(inputArr[i]);
            comboArrLengths.push(result.length);
        }
        // console.log(result);
        // console.log(comboArrLengths);
        
    }
    console.log(Math.max(...comboArrLengths));
    
    let output = Math.max(...comboArrLengths);
    return output;
}


let arr1 = [4, 6, 5, 3, 3, 1];
let arr2 = [1, 1, 2, 2 ,4 ,4, 5, 5, 5];
let arr3 = [1, 2, 2, 3, 1, 2];


let val = pickingNumbers(arr1);