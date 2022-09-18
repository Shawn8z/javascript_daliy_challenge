function appendAndDelete(s, t, k) {
    // Write your code here
    let str1 = s;
    let str2 = t;
    let maxLength = 0;
    let startIndex = 0;
    let processSteps = 0;


    if (str1.length < str2.length) {

        if ( k % (str2.length - str1.length)  == 0 && str2.length - str1.length != 1) {
            return "Yes";
        } else {
            return "No";
        }

    } else if (str1.length > str2.length) {

        maxLength = str1.length

    } else {
        if (str1.length % 2 == 0 && k % 2 == 0) {
            return "Yes";
        } else {
            return "No";
        }
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




let startingStr = "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
let targetStr = "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
let steps = 20;


let result = appendAndDelete(startingStr, targetStr, steps);
console.log(result);
