function minimumDistances(a) {
    // Write your code here
    let resultArr = [];
    let loopCount;

    if (a.length % 2 == 0) {
        loopCount = a.length / 2;
    } else {
        loopCount = Math.ceil(a.length / 2);
    }
    
    for (let i = 0; i < loopCount; i++) {
            let findIndex = matchingItemIndex(i, arr);
        if (findIndex != 0) {
            let dif = Math.abs(i - findIndex);
            resultArr.push(dif);
        }
    }

    function matchingItemIndex(index, arr) {
        if (index == 0) {
            let item = arr[index];
            let tempArr = arr.slice(index + 1);
            
            let matchIndex = tempArr.findIndex((num) => item == num) + 1;
            return matchIndex;
        } else {
            let item = arr[index];
            let leftArr = arr.slice(0, index);
            let rightArr = arr.slice(index + 1);
            let tempArr = leftArr.concat(rightArr);

            let matchIndex = tempArr.findIndex((num) => item == num) + 1;
            return matchIndex;
        }
    }

    console.log(resultArr);
    if (resultArr.length > 0) {
        console.log("fired");
        console.log(Math.min(...resultArr));
        return Math.min(...resultArr);
    } else {
        console.log(-1);
        return -1;
    }

}

let arr = [7, 1, 3, 4, 1, 7];
let arr2 = [1, 2, 3, 4, 10];

minimumDistances(arr2);