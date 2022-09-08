function beautifulDays(i, j, k) {
    // Write your code here
    let goodDays = [];

    for (let z = i; z <= j; z++) {

        let tempVal = Math.abs( z - reverseDigit(z) ) / k ;
        if ( Number.isInteger(tempVal) ) {
            goodDays.push(z);
        }
    }


    function reverseDigit(num) {
        let str = num.toString ();
        let reversD = "";
        for (let y = str.length - 1 ; y >= 0; y--) {
            reversD += str[y];
        }
        return Number(reversD);
    }

    return goodDays.length;
}


let i = 13;
let j = 45;
let k = 3;
//13 45 3
let val = beautifulDays(20, 23, 6);
console.log(val);