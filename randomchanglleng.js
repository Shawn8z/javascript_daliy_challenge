function arrZip1(ar1, ar2) {
    let resultArr = [];

    for (let i = 0; i < 3; i++) {
        resultArr.push(ar1[i]);

        resultArr.push(ar2[i]);
    }

    console.log(resultArr);
}



let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

// arrZip1(arr1, arr2);
arrZip2(arr1, arr2);