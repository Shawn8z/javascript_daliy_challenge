function miniMaxSum(arr) {
    // Write your code here
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let otherNum = arr.filter((item) => item != maxNum && item != minNum);
    let numCount = otherNum.length;

    let maxSum = maxNum;
    let minSum = minNum;

    if (maxNum !== minNum) {
        for (let i = 0; i < numCount; i++) {
            maxSum += otherNum[i]; 
        }
    
        for (let i = 0; i < numCount; i++) {
            minSum += otherNum[i]; 
        }
        
    
        function additionDoesOverFlow(a, b) {
            let c = a + b;
            return a != c-b || b != c-a;
        }
    
        
        console.log(`${minSum} ${maxSum}`);
    }
    if (maxNum === minNum) {
        let result = maxNum * 4;
        console.log(`${result} ${result}`);
    }
}

let val = [5,5,5,5,5];
miniMaxSum(val);


