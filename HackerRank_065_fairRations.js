function fairRations(B) {
    // Write your code here
    let breadArr = B;
    let length = breadArr.length;
    let result = 0;


    for (let i = 0; i < length; i++) {
        if ( !isItemEven(i) && i != length - 1 ) {
            breadArr[i] += 1;
            breadArr[i + 1] += 1;
            result += 2;
        }
    }

    if ( isItemEven(length - 1) ) {
        return String(result);
    } else {
        return "NO";
    }


}

let arr = [1, 2];

let val = fairRations(arr);
console.log(val);