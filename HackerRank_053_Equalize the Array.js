function equalizeArray(arr) {
    // Write your code here
    let itemCount = [];

    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        let item = arr[i];

        for (let b = 0; b < arr.length; b++) {
            if (item == arr[b]) {
                counter += 1;
            }
        }

        itemCount.push(counter);
    }
    
    
    let maxCount = Math.max(...itemCount);
    let object2Remove = arr.length - maxCount;

    console.log(object2Remove);
    return object2Remove;
}



let arr1 = [1, 2, 2, 3];
let arr2 = [3, 3, 2, 1, 3];

equalizeArray(arr2);