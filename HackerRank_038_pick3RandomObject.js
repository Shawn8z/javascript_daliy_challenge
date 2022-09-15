let testArr = [];
for (let i = 1; i <= 50; i++ ){
    testArr.push(i);
}





function Pick3RandomObj(arr) {
    let itemPool = arr;
    let itemCount = arr.length;
    let resultArr = [];
    let counter = 0;


    while (counter < 3) {
        let index = Math.floor(Math.random() * itemCount);
        let item = itemPool[index];

        if (!resultArr.some((element) => element == item)) {
            resultArr.push(item);
            counter += 1;
        }
    }

    console.log(resultArr);
    // return resultArr;
}



Pick3RandomObj(testArr);