function strangeCounter(t) {
    // Write your code here
    let second = BigInt(1);
    let targetT = BigInt(t);
    let initVal = BigInt(3);

    while (second != targetT) {
        // console.log("loop started");
        let tempVal = counter(initVal);
        initVal = tempVal;
        // console.log(`initVal = ${initVal}`);
        // console.log("loop end");
    }


    function counter(initNum) {

        for (let i = initNum; i > 0; i--) {
            // console.log(`current second is ${second}, value is ${i}`);

            if (second == targetT) {
                // console.log("times up");
                return i;
            }

            second += BigInt(1);
            
            if (i == 1) {
                // console.log("reached 1");
                return initNum * BigInt(2);
            }
        }

    }
    
    // console.log(initVal);
    return initVal;
}

let val = 999999766777;

strangeCounter(val);