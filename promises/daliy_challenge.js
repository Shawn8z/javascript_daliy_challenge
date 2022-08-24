function canNest(arr1, arr2) {
	let min1 = Math.min(...arr1);
    let min2 = Math.min(...arr2);

    let max1 = Math.max(...arr1);
    let max2 = Math.max(...arr2);

    if ( (min1 > min2) && (max1 < max2) ) {
        return true;
    }

    return false;
}








let val1 = canNest([1, 2, 3, 4], [0, 6]) //true

let val2 = canNest([9, 9, 8], [8, 9]) //false

console.log(val2);