function hourglassSum(arr) {
    // Write your code here
    let sumArr = [];


    for (let i = 0; i < 4; i++) {

        for (let b = 0; b < 4; b++) {
            // console.log(arr[i][b], arr[i][b + 1], arr[i][b + 2]);
            // console.log(arr[i + 1][b + 1]);
            // console.log(arr[i + 2][b], arr[i + 2][b + 1], arr[i + 2][b + 2]);
            let sum = arr[i][b] + arr[i][b + 1] + arr[i][b + 2] 
                    + arr[i + 1][b + 1]
                    + arr[i + 2][b] + arr[i + 2][b + 1] + arr[i + 2][b + 2]

            sumArr.push(sum);
        }
        

    }

    return Math.max(...sumArr);
}


let arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
]

hourglassSum(arr);