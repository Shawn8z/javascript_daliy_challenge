function FirstReverse(str) { 
    let result = "";
    let strLength = str.length;

    for (let i = strLength-1 ; i >= 0; i--) {
        result += str[i];
    }

    return result; 
}

let val = FirstReverse("I Love Code");

console.log(val);