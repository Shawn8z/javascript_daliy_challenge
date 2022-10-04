function reverseArray(a) {
    // Write your code here
    let arr = a;
    let arrLength = a.length;
    let resultArr = [];
    
    for (let i = arrLength - 1; i >= 0; i--) {
        resultArr.push(arr[i]);
    }
    
    return resultArr;
}


let arr = [1, 4, 3, 2];
reverseArray(arr);