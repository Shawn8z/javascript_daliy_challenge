function formingMagicSquare(s) {
    // Write your code here
    let mSize = 3;
    let sumX = [];
    let sumY = [];
    let sumLeftSlash = 0;
    let sumRightSlash = 0;
    let diagonalSum = [];
    let allSums = 0;
    let commonSum = 0;

    let sumXOptions = [];
    let sumYOptions = [];
    let diagonalSumOptions = [];
    

    rollSums(s);
    commonSum = getCommonSum();
    findOptionSpot(commonSum);


    function rollSums (s) {
        //sum on rows
        for (let arr of s) {
            let sum = arr.reduce((pVal, cVal) => pVal + cVal, 0);
            sumX.push( sum );
        }

        // sum on columns
        for (let i = 0; i < mSize; i++) {
            let sum = s[0][i] + s[1][i] + s[2][i];
            sumY.push( sum );
        }

        // sum on diagonal lines
        sumLeftSlash = s[0][0] + s[1][1] + s[2][2];
        sumRightSlash = s[2][0] + s[1][1] + s[0][2];
        diagonalSum = [sumLeftSlash, sumRightSlash];

        allSums = sumX.concat(sumY).concat(diagonalSum);
        

        console.log(sumX);
        console.log(sumY);
        console.log(diagonalSum);
        // console.log(allSums);
    }
    
    function getCommonSum() {
        // find the the different types of sums;
        let uniqueSums = [];
        for (let item of allSums) {
            if ( !uniqueSums.includes(item) ) {
                uniqueSums.push(item);
            }
        }

        //find counts of all sums
        let itemCount = [];
        for (let i = 0; i < uniqueSums.length; i++) {
            let count = 0;
            
            for (let z = 0; z < 8; z++) {
                if (allSums[z] === uniqueSums[i]) {
                    count += 1;
                }
            }

            itemCount.push(count);
            // console.log(itemCount);

        }
        
        // find the most common sum;
        let maxCount = Math.max(...itemCount);
        let maxCountIndex = itemCount.findIndex((item) => item === maxCount );
        let commonSum = uniqueSums[ maxCountIndex ];
        return commonSum;
    }

    function findOptionSpot(commonSum) {
        let rollX = sumX.map((item) => item !== commonSum ? 1 : 0);
        let rollY = sumY.map((item) => item !== commonSum ? 1 : 0);
        let diagonal = diagonalSum.map((item) => item !== commonSum ? 1 : 0);


        console.log(rollX);
        console.log(rollY);
        console.log(diagonal);
        sumXOptions = rollX;
        sumYOptions = rollY;
        diagonalSumOptions = diagonal;
    }

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


formingMagicSquare(s1);