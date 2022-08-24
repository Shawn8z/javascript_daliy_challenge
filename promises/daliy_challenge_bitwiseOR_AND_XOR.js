function bitwiseAND(n1, n2) {
	let result = "";

    let binaryNumArr = binaryNumGen(n1, n2);


    let numArr1 = [...binaryNumArr[0]];
    let numArr2 = [...binaryNumArr[1]];
    let arrLength = numArr1.length;
    

    for (let i = 0; i < arrLength; i++) {
        if (numArr1[i] == numArr2[i]) {
            result += numArr1[i];
        }

        if (numArr1[i] != numArr2[i]) {
            result += 0;
        }
    }

    console.log(result);
    let outPut = parseInt(result, 2);
    console.log(outPut);
    return outPut;

}




function bitwiseOR(n1, n2) {
	let result = "";

    let binaryNumArr = binaryNumGen(n1, n2);


    let numArr1 = [...binaryNumArr[0]];
    let numArr2 = [...binaryNumArr[1]];
    let arrLength = numArr1.length;

    for (let i = 0; i < arrLength; i++) {
        if (numArr1[i] == 1 || numArr2[i] == 1) {
            result += 1;
        }

        if (numArr1[i] == 0 && numArr2[i] == 0) {
            result += 0;
        }
    }

    console.log(result);
    let outPut = parseInt(result, 2);
    console.log(outPut);
    return outPut;
}

function bitwiseXOR(n1, n2) {
	let result = "";

    let binaryNumArr = binaryNumGen(n1, n2);


    let numArr1 = [...binaryNumArr[0]];
    let numArr2 = [...binaryNumArr[1]];
    let arrLength = numArr1.length;

    for (let i = 0; i < arrLength; i++) {
        if (numArr1[i] != numArr2[i]) {
            result += 1;
        }

        if (numArr1[i] == numArr2[i]) {
            if (numArr1[i] == 0 || numArr1[i] == 1) {
                result += 0;
            } 
        }
    }


    console.log(result);
    let outPut = parseInt(result, 2);
    console.log(outPut);
    return outPut;
}





function binaryNumGen(n1, n2) {
    let result = [];

    let num1 = n1.toString(2);
    let num2 = n2.toString(2);

    let shortNum = num1.length - num2.length < 0 ? num1 : num2;
    let longNum = num1.length - num2.length > 0 ? num1 : num2;
    let lengthDif = Math.abs(num1.length - num2.length);

    let prefixZero = "";
    for (let i = 0; i < lengthDif; i++) {
        prefixZero += 0;
    }
    shortNum = prefixZero + shortNum;

    result.push(shortNum);
    result.push(longNum);
    
    return result;
}

bitwiseAND(6, 23);
bitwiseOR(6, 23);
bitwiseXOR(6, 23);