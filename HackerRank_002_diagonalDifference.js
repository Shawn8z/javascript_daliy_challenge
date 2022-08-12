function diagonalDifference(arr) {
    // Write your code here
    let cubeLength = arr.length;
    let result = 0;

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < cubeLength; i++) {
        sum1 += arr[i][i];
        
    }

    for (let i = 0; i < cubeLength; i++) {
        sum2 += arr[i][(cubeLength - 1) - i]
    }

    result = Math.abs(sum1 - sum2);
    console.log(result);
    return result;
}



let val = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

diagonalDifference(val)