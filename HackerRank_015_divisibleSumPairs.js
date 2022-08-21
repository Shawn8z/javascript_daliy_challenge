function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let numPool = ar;
    let targetNum = k;
    let pairs = 0;


    for (let i = 0; i < n; i++) {
        let itemA = ar[i];

        for (let b = i + 1; b < n; b++) {
            let itemB = ar[b];
            
            if ( (itemA + itemB) % targetNum === 0) {
                pairs += 1;
            }
        }
    }

    return pairs;
}




let n = 6;
let k = 5;
let ar = [1, 2, 3, 4, 5, 6];

let val = divisibleSumPairs(n, k, ar)
console.log(val);
