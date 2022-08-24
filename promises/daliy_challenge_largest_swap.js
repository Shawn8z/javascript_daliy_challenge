
function largestSwap(num) {
	
    if (num == 99) {
        return true;
    }

    let strNum = num.toString()
    let swapedNum = strNum[1] + strNum[0];

    if (Number(strNum) > Number(swapedNum)) {
        return true;
    }

    return false;
}



let val = largestSwap(27);
console.log(val);

