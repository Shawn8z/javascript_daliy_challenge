function appendAndDelete(s, t, k) {
    // Write your code here
    let str1 = s;
    let str2 = t;
    let maxLength = 0;
    let startIndex = 0;
    let processSteps = 0;
    let same = false;

    if (str1.length < str2.length) {
        maxLength = str2.length;
    } else {
        maxLength = str1.length
    }

    for (let i = 0; i < maxLength; i++) {
        if (str1[i] != str2[i]) {
            startIndex = i;
            break;
        }

        if (i == maxLength - 1) {
            processSteps = maxLength;
        }
        
    }

    if (processSteps != maxLength) {
        processSteps = str1.slice(startIndex).length + str2.slice(startIndex).length;
    }

    if (processSteps == k || processSteps < k) {
        return "Yes";
    } else {
        return "No";
    } 
}




let startingStr = "y";
let targetStr = "yu";
let steps = 2;


let result = appendAndDelete(startingStr, targetStr, steps);
console.log(result);
