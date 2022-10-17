function happyLadybugs(b) {
    // Write your code here
    let testStr = b;
    let regex = /[A-Z]/g;
    let letters = [];
    let letterCounts = [];
    let isDoable = null;
    let letterArr = testStr.match(regex);

    if (letterArr == null) {
        return "YES";
    }

    for (let i = 0; i < letterArr.length; i++) {
        if (!letters.includes(letterArr[i])) {
            letters.push(letterArr[i]);
        }
    }

    for (let i = 0; i < letters.length; i++) {
        let target = letters[i];
        let targetCount = 0;

        letterArr.forEach((item) => { 

            if (item == target) {
                targetCount += 1;
            }

        })
        
        letterCounts.push(targetCount);
    }     

    if (letterCounts.length == 1) {
        return "YES";
    }

    for (let i = 0; i < letterCounts.length; i++) {
        if (letterCounts[i] == 1) {
            isDoable = false;
            break;
        } else {
            isDoable = true;
        }
    }

    if (isDoable) {

        if (testStr.includes("_")){
            return "YES";
        } else {
            return "NO";
        }

    } else {
        return "NO";
    }
}





let str1 = "_";
let str2 = "RBRB";
let str3 = "RRRR";
let str4 = "BBB";
let str5 = "BBB_";



let val = happyLadybugs(str3);
console.log(val);