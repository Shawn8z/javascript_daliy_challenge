function rotateLeft(d, arr) {
    // Write your code here
    let runTimes = d;
    let currentArr = arr;


    for (let i = 0; i < runTimes; i++) {
        
        let firstItem = currentArr.shift();
        currentArr.push(firstItem);

    }


    return currentArr;
}

let arr = [1, 2, 3, 4, 5];
let val = rotateLeft(4, arr);
console.log(val);
