function sockMerchant(n, ar) {
    // Write your code here
    let sockTypes = [];
    let sockTypeCount = [];

    for (let i = 0; i < n; i++) {
        if (!sockTypes.includes(ar[i])) {
            sockTypes.push(ar[i]);
        }
    }

    let sockTypeLength = sockTypes.length;
    for (let i = 0; i < sockTypeLength; i++) {
        let socksCount = ar.filter((item) => item == sockTypes[i]).length;
        sockTypeCount[i] = socksCount;
    }

    let oddPairCount = 0;
    for (let i = 0; i < sockTypeLength; i++) {
        if (sockTypeCount[i]%2 === 0) {
            oddPairCount += sockTypeCount[i]/2;

        } else if (sockTypeCount[i] === 1) {
            continue;

        } else {
            oddPairCount += (sockTypeCount[i] - 1)/2;
        }
    }

    console.log(oddPairCount);
    return oddPairCount;
}




// let length = 9;
// let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];


let n = 10;
let nums = [1,1,3,1,2,1,3,3,3,3];
sockMerchant(n, nums);


