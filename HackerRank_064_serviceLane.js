function serviceLane(widths, cases) {
    // Write your code here
    let caseCount = cases.length;
    let resultArr = []

    for (let i = 0; i < caseCount; i++) {
        let targetCase = cases[i];

        let segment = widths.slice(targetCase[0], targetCase[1]);
        resultArr.push(Math.min(...segment));
    }

    return resultArr;
}


let arr = [2, 3, 1, 2, 3, 2, 3, 3];
let arrC = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

let val = serviceLane(arr, arrC);
console.log(val);