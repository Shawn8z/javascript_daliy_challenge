function matchingStrings(stringList, queries) {
    // Write your code here
    let listLength = stringList.length;
    let queryLength = queries.length;
    let resultArr = [];

    for (let i = 0; i < queryLength; i++) {
        let counter = 0;

        for (let b = 0 ; b < listLength; b++) {
            if (stringList[b] == queries[i]) {
                counter += 1;
            }
        }

        resultArr.push(counter);
    }

    console.log(resultArr);
    return resultArr;
}

let str = ["def", "de", "fgh"];
let q = ["de", "lmn", "fgh"];

matchingStrings(str, q);