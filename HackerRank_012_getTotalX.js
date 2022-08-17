function getTotalX(a, b) {
    // Write your code here

    let arr1 = a;
    let arr2 = b;
    let resultArr = [];

    for (let i = 1; i <= 50; i++) {
        let passA = true;
        let passB = true;

        for (let b = 0; b < arr1.length; b++) {
            if (i % arr1[b] !== 0) {
                passA = false;
            }
        }
        

        for (let c = 0; c < arr2.length; c++) {
            if (arr2[c] % i !== 0) {
                passB = false;
            }
        }

        if (passA && passB) {
            resultArr.push(i);
        }

    }




    return resultArr.length;
}

let arr1 = [2, 3];
let arr2 = [2, 4];

let arr3 = [2, 6];
let arr4 = [24, 36];

getTotalX(arr3, arr4);
