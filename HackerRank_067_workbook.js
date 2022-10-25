function workbook(n, k, arr) {
    // Write your code here
    let chapterCount = n;
    let qPerPage = k;
    let qCountArr = arr;

    let pages = 0;
    let currentPageNum = 0;
    let chapObjArr = [];
    let spQCount = 0;

    for (let i = 0; i < chapterCount; i++) {
        let pageForChapt = Math.ceil(qCountArr[i] / qPerPage);
        pages += pageForChapt;

        let chapObj = fillQtoPage(qCountArr[i], qPerPage, pages);
        chapObjArr.push(chapObj);
        
    }

    for (let i = 0; i < chapObjArr.length; i++) {
        spQCount += spTester(chapObjArr[i]);
    }

    function fillQtoPage(qCount, qPerPage, currentPages) {
        let chapObj = {};
        let qLeft = qCount;
        let qNo = 1;

        for (let i = 1; i <= currentPages; i++) {
            
            let qOnPage;
            currentPageNum += 1;

            if (qLeft >= qPerPage) {
                qOnPage = qPerPage
            } else if (qLeft < qPerPage) {
                qOnPage = qLeft;
            }
            
            let qNoArr = [];
            for (let z = 1; z <= qOnPage; z++) {
                qNoArr.push(qNo);
                qNo += 1;
            }

            chapObj[currentPageNum] = qNoArr;
            qLeft -= qPerPage;

            if (qLeft <= 0) {
                break;
            }
        }

        // console.log(chapObj);
        return chapObj;
    }


    function spTester(chapObj) {
        let result = 0;

        let strKeys = Object.keys(chapObj);
        
        for (let i = 0; i < strKeys.length; i++) {
            let key = strKeys[i];
            let target = Number(strKeys[i]);
            let testArr = chapObj[key];

            let hasTarget = testArr.some((item) => item == target);

            if (hasTarget) {
                result += 1;
            }

        }

        return result;
    }

    // console.log(spQCount);
    return spQCount;
}



let arr1 = [5, 3, [4, 2, 6, 1, 10]];
let val = workbook(...arr1);
console.log(val);
