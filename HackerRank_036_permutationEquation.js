function permutationEquation(p) {
    // Write your code here
    let arrLength = p.length;
    let testNum = [];
    let resultArr = [];

    for (let i = 1; i <= arrLength; i++) {
        testNum.push(i);
    }
    console.log(testNum);

    for (let i = 0; i < arrLength; i++) {
        let index = p.findIndex((item) => item === testNum[i]);
        resultArr.push(index);
    }

    console.log(resultArr);




}



let arr = [4, 3, 5, 1, 2];

permutationEquation(arr);