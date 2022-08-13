function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeros = 0;
    let arrLength = arr.length;



    for (let i = 0; i < arrLength; i++) {

        if (arr[i] > 0) {
            positiveCount += 1;
        }

        if (arr[i] < 0) {
            negativeCount += 1;
        }

        if (arr[i] == 0) {
            zeros += 1;
        }
    }
    


    let pProportion = (positiveCount/arrLength).toFixed(6);
    let nProportion = (negativeCount/arrLength).toFixed(6);
    let zProportion = (zeros/arrLength).toFixed(6);

    console.log(pProportion);
    console.log(nProportion);
    console.log(zProportion);
}


let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
