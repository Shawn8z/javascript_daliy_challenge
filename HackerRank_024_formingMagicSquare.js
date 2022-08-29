function formingMagicSquare(s) {
    // Write your code here
    // for a 3 x 3 magic square, its line sum depend on the center value, all line sum should equals
    // 3 * center value, so you find what every line sum is and add all the differences together


    const allCombos = [
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [6, 1, 8, 7, 5, 3, 2, 9, 4]
    ] 
        
    const arr1D = s.flat();
    let totalDifference = [];
    
    for (let array of allCombos) {
        let total = 0;

        for (let i = 0; i < 9; i++) {
            total += Math.abs(array[i] - arr1D[i])
        }

        totalDifference.push(total);
    }

    return Math.min(...totalDifference);
    
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

let s5 = [
            [2, 5, 4],
            [4, 6, 9],
            [4, 5, 2]
        ]

let val = formingMagicSquare(s5);
console.log(val);