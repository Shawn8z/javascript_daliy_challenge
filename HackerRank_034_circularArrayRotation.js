function circularArrayRotation(a, k, queries) {
    // Write your code here
    let arr = a;
    let steps = k;

    let tempArr = [...arr]

    // for (let i = 0; i < steps; i++) {
    //     tempArr = shiftLastArrItemToFront(tempArr);
    // }

    for (let i = 0; i < 10; i++) {
        console.log((i + 1) % 10);
    }
    let test = ""
    // function shiftLastArrItemToFront(arr) {
    //     let lastItem = arr.slice(-1);
    //     let remainingArr = arr.slice(0, -1);

    //     return [...lastItem, ...remainingArr];
    // }
    
    // let resultArr = [];
    // for (let index in queries) {
    //     resultArr.push(tempArr[index]);
    // }

    // return resultArr;
}


let routationCount = 2;
let numArr = [1, 2, 3];
let queries = [0, 1, 2];


circularArrayRotation(numArr, routationCount, queries); 