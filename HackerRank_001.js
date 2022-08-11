function compareTriplets(a, b) {
    // Write your code here
    let arr1 = a;
    let arr2 = b;
    let arrLength = a.length;
    let score1 = 0;
    let score2 = 0;
    
    for (let i = 0; i < arrLength; i++) {
        if (arr1[i] > arr2[i]) {
            score1 += 1;
        }
        
        if (arr1[i] < arr2[i]) {
            score2 += 1;
        }
        
        if (arr1[i] == arr2[i]) {
            continue;
        }
    }
    
    return [score1, score2];
}

let arr1 = [5, 6, 7];
let arr2 = [3, 6, 10];

let val = compareTriplets(arr1, arr2);
console.log(val);