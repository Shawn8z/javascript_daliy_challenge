function findLetters(str) {
    let regex  = /[a-z]/g;
    let result = str.match(regex).join("");
    console.log(result);
    return result;
}

let test1 = "UcUNFYGaFYFYGtNUH";
let test2 = "bEEFGBuFBRrHgUHlNFYaYr";
let test3 = "YFemHUFBbezFBYzFBYLleGBYEFGBMENTment";


findLetters(test3);