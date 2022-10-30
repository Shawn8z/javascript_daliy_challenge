function stones(n, a, b) {
    // Write your code here
    let stoneCount = n;
    let stoneVal = 0;

    let diff1 = a;
    let diff2 = b;

    let resultArr = [];
    let diffCombos = [[diff1, diff1], [diff1, diff2], [diff2, diff1], [diff2, diff2]];
    
    

    for (let i = 0; i < diffCombos.length; i++) {
        let diffs = diffCombos[i];

        let combo = comboMaker(n, diffs);
        console.log(combo);
        // resultArr.push(combo);
    }

    function comboMaker(n, diffCombos, index) {
        let diffArr = diffCombos;
        let rockCount = n;
        let result = [0];

        for (let i = 1; i < rockCount; i++) {
            let index = (i-1) % 2;
            // console.log(`the i is ${i}, the index is ${index}`);

            let val = result[i - 1] + diffArr[index];
            result.push(val);
            // console.log(result);
            
        }

        // console.log(result);
        return result;
    }

    function diffComboBuilder() {
        
    }
}


let arr1 = [3, 1, 2];
let arr2 = [4, 10, 100];

stones(...arr2);