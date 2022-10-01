function cutTheSticks(arr) {
    // Write your code here
    let resultArr = [];
    let intervalArrLength = arr.length;
    resultArr.push(intervalArrLength);


    let loopArr = arr;
    for (let i = 0; i < 1000; i++) {

        let min = getMin(loopArr);

        let newArr = removeMin(loopArr, min);        
        loopArr = cutStick(newArr, min);
        
        if (loopArr.length > 0) {
            resultArr.push(loopArr.length);
        } else {
            break;
        }

    }


    function getMin(arr) {
        return Math.min(...arr);
    }

    function removeMin(arr, min)  {
        return arr.filter((item) => item != min);
    }

    function cutStick (arr, min) {
        return arr.map((item) => item - min);
    }

    console.log(resultArr);
    return resultArr;
}


let str1 = "8 8 14 10 3 5 14 12"


let arr1 = [5, 4, 4, 2, 2, 8];
let tempArr = str1.split(" ");
let arr2 = tempArr.map((item) => Number(item));
// console.log(arr2);
cutTheSticks(arr2);