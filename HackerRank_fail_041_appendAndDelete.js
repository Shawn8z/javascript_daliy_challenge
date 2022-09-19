function appendAndDelete(s, t, k) {
    // Write your code here
    let str1 = s;
    let str2 = t;
    let maxLength = 0;
    let startIndex = 0;
    let processSteps = "";

    // if str1 is shorter than str2
    if (str1.length < str2.length) {

        maxLength = str2.length;

    } else if (str1.length > str2.length) {

        maxLength = str1.length;

    } else {

        maxLength = str1.length;

    }

    for (let i = 0; i < maxLength; i++) {
        if (str1[i] != str2[i]) {
            startIndex = i;
            break;
        }
    }

    if (processSteps !== 0) {
        processSteps = str1.slice(startIndex).length + str2.slice(startIndex).length;
    } 

    console.log(processSteps);


    if (processSteps == k || (processSteps < k && k != maxLength && k % processSteps == 0) || k % processSteps == 0 && processSteps != 1) {
        return "Yes";
    } else {
        return "No";
    } 
}




let startingStr = "abcdert";
let targetStr = "abcd";
let steps = 10;


let result = appendAndDelete(startingStr, targetStr, steps);
console.log(result);

