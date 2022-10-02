function nonDivisibleSubset(k, s) {
    // Write your code here
    let length = s.length;
    let resultArr = [];


    for (let i = 0; i < length; i++) {
        let currentNum = s[i];
        let numPool = s.filter((item) => item != currentNum);

        for ( let b = 0; b < numPool.length; b++) {

            if ( !inputSumDivisible(currentNum, numPool[b]) ) {
                console.log(currentNum, numPool[b]);
                if ( !resultArr.includes(currentNum) ) {
                    resultArr.push(currentNum);
                }
                if ( !resultArr.includes(numPool[b]) ) {
                    resultArr.push(numPool[b]);
                }
            }

        }
    }


    function inputSumDivisible(fixNum, newNum) {
        return (fixNum + newNum) % k == 0;
    }

    console.log(resultArr.length);
    return resultArr.length;
}




let k = 9;
let s = [422346306, 940894801, 696810740, 862741861, 85835055, 313720373];

nonDivisibleSubset(k, s);