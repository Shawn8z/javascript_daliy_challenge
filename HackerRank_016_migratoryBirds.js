
function migratoryBirds(arr) {
    // Write your code here
    let typeCount = arr.length;

    let types = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
    }

    let typeKeys = Object.keys(types);

    for (let i = 0; i < typeCount; i++) {
        types[`${arr[i]}`] += 1;
    }

    let typeVal = Object.values(types);
    let maxCount = Math.max(...typeVal);

    let result = typeVal.filter((item) => item == maxCount);
    console.log(result);

    if (result.length === 1) {
        let index = typeVal.findIndex((item) => item == result);
        return typeKeys[index];
    } else {
        let index = typeVal.findIndex((item) => item == result[0]);
        return typeKeys[index];
    }
    
}



let val = [1, 4, 4, 4, 5, 3];
let val3 = "1 4 4 4 5 3".split(" ").map((item) => parseInt(item, 10));
let val2 = "1 2 3 4 5 4 3 2 1 3 4".split(" ").map((item) => parseInt(item, 10));
let result = migratoryBirds(val2);
console.log(result);