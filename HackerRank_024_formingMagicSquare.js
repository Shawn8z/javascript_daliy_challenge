function formingMagicSquare(s) {
    // Write your code here
    // for a 3 x 3 magic square, its line sum depend on the center value, all line sum should equals
    // 3 * center value, so you find what every line sum is and add all the differences together

    // let lineSum = s[1][1] * 3;
    // let lineSum = 15;
    // let result = 0;
    


    // let rightDiagonal = [s[0][0], s[1][1], s[2][2]];
    // let leftDiagonal = [s[0][2], s[1][1], s[2][0]];
    // let centerColumn = [s[0][1], s[1][1], s[2][1]];
    // let centerRow = [s[1][0], s[1][1], s[1][2]];
    // let allLines = [rightDiagonal, leftDiagonal, centerColumn, centerRow]

    // for (let item of allLines) {
    //     result += lineSumDifference(item);
    // }
    
    // function lineSumDifference(roll) {
    //     let rollSum = roll.reduce((pVal, cVal) => pVal + cVal, 0);

    //     return lineSum - rollSum !== 0 ? Math.abs(lineSum - rollSum) : 0;
    // }
    
    
    // return result;


    const possibleMagicSquares = [
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [6, 1, 8, 7, 5, 3, 2, 9, 4]
    ] 
        
    const s_flat = s.flat();
    let totalDifferent = [];
    for(let i = 0; i < possibleMagicSquares.length; i ++) {
        let total = 0;
        s_flat.reduce((previous, current, index) => {
            total = previous + Math.abs(current - possibleMagicSquares[i][index]);
            return total
        }, 0)
        totalDifferent.push(total);
    }
    return Math.min(...totalDifferent);
}



let s1 = [
            [5, 3, 4],
            [1, 5, 8], 
            [6, 4, 2]
        ];

let s2 = [
            [4, 9, 2], 
            [3, 5, 7],
            [8, 1, 5]
        ];

let s3 = [
            [4, 8, 2],
            [4, 5, 7],
            [6, 1, 6]
        ];  
        
let s4 = [
            [4, 8, 2],
            [4, 5, 7],
            [6, 1, 6]
        ]


let val = formingMagicSquare(s4);
console.log(val);