function beautifulTriplets(d, arr) {
    // Write your code here
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (beautyTest(arr[i], arr)) {
            // console.log("------------");
            result += 1;
        }
    }

    // test to see if the current array has elements to join with the current item to become a beauty.
    function beautyTest(item, arr) {
        let firstItem = item;

        let secItem = null;
        let hasSecond = null;
        let thirdItem = null;
        let hasThird = null;

        hasSecond = arr.findIndex((item) => item == firstItem + d);
        
        if (hasSecond != -1) {
            secItem = arr[hasSecond];
            hasThird = arr.findIndex((item) => item == secItem + d);
        }
        // hasThird = arr.findIndex((item) => item == secItem + d);

        if (hasThird != -1) {
            thirdItem = arr[hasThird];
        }
        
        if (hasSecond != -1 && hasThird != -1) {
            return [item, secItem, thirdItem];
        }
    }


    return result;
}




let dif = 3;
let arr = [1, 2, 4, 5, 7, 8, 10];

let val = beautifulTriplets(dif, arr);
console.log(val);