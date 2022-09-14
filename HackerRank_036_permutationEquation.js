function permutationEquation(p) {
    // Write your code here
    let arrLength = p.length;
    let testNum = [];
    let indexArr = [];
    let resultArr = [];

    for (let i = 1; i <= arrLength; i++) {
        testNum.push(i);
    }
    

    for (let i = 0; i < arrLength; i++) {
        let index = p.findIndex((item) => item === testNum[i]);
        indexArr.push(index + 1);
    }


    for (let i = 0; i < arrLength; i++) {
        let index = p.findIndex((item) => item === indexArr[i]);
        resultArr.push(index + 1);
    }

    console.log(resultArr);

    return resultArr;

}



let arr1 = [4, 3, 5, 1, 2];
let arr2 = [5, 2, 1, 3, 4];
permutationEquation(arr2);