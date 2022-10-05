function arrayManipulation(n, queries) {
    // Write your code here
    let arr = Array(n);
    arr.fill(0);
    
    for (let i = 0; i < queries.length; i++) {

        let startIn = queries[i][0] - 1;
        let endIn = queries[i][1] - 1;
        let num = queries[i][2];

        addToIndexItem(startIn, endIn, num);

    }

    function addToIndexItem(start, end, num) {
        for (let i = start; i <= end; i++) {
            arr[i] += num;
        }
    }

    console.log(Math.max(...arr));
    return Math.max(...arr);
}




let n = 5;
let q = [[1,2,100], [2,5,100], [3,4,100]];
let val = arrayManipulation(n, q);
