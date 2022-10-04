function repeatedString(s, n) {
    // Write your code here
    let strLength = s.length;
    let str = s;
    let resultStr = '';

    if (str.length == 1 && str == "a") {
        return n;
    }


    if (strLength < n) {
        // console.log("smaller");

        if (strLength % n != 0) {
            let fixer = Math.floor(n / strLength);
            let leftOver = n % strLength;
    
            for (let i = 0; i < fixer; i++) {
                resultStr += str;
            }
    
            
            for (let i = 0; i < leftOver; i++) {
                resultStr += str[i];
            }
            
        } else {
            let fixer = strLength % n;
    
            for (let i = 0; i < fixer; i++) {
                resultStr += str;
            }
        }
    
        let letterCount = 0;
        for (let i = 0; i < resultStr.length; i++) {
            if (resultStr[i] == "a") {
                letterCount += 1;
            }
        }
    

        return letterCount;
    } else {

        for (let i = 0; i < n; i++) {
            resultStr += str[i];
        }

        let letterCount = 0;
        for (let i = 0; i < resultStr.length; i++) {
            if (resultStr[i] == "a") {
                letterCount += 1;
            }
        }

        return letterCount;
    }

    
}


let str = "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm";
let num = 736778906400;


let val = repeatedString(str, num);
console.log(val);