function strangeCounter(t) {
    // Write your code here
    let second = 1;
    let targetT = t;
    let initVal = 3;

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

            second += 1;
            
            if (i == 1) {
                // console.log("reached 1");
                return initNum * 2
            }
        }

    }
    
    // console.log(initVal);
    return initVal;
}

let val = 999999766777;

strangeCounter(val);